import { Offer } from './Offer';
import { Deal } from './Deal';

import { OfferType } from './OfferType';
import { MarketService } from '../shared/market.service';
import { NewGameForm } from './NewGameForm';

/**
 * A forma que as ofertas aparecem no book de ofertas (ordenadas por score): um array de OfferScore
 */
export interface OfferScore {
    score: number,
    status: OfferType, 
    total: number, 
    queue: Array<Offer>
}

export class Market{
    
    offerList: Array<OfferScore>;     //Lista de ofertas por ordem de pontuação (score)
    dealList: Array<Deal>;      //Lista de negócios fechados ordenados por tempo
    lotPricePerScore: number;
    tickSize: number;       //Variação mínima da pontuação
    minimumOfferSize: number;       //Quantidade mínima de lotes por oferta
    initialPurchasePrice: number;
    initialSalePrice: number;

    constructor(private marketService: MarketService, form: NewGameForm){
        this.dealList = [];
        this.offerList = [];
        this.tickSize = parseFloat(form.tickSize);
        this.lotPricePerScore = parseFloat(form.lotPricePerScore);
        this.minimumOfferSize = parseInt(form.minimumOfferSize);
        this.initialPurchasePrice = parseFloat(form.initialPurchasePrice);
        this.initialSalePrice = parseFloat(form.initialSalePrice);
        //Constrói a base da lista de ofertas:
        this.offerList.push({
            score: parseFloat(form.initialSalePrice), 
            status: null,
            total: 0,
            queue: []
        })
        for(let i = 1; i < 30; i++){    //Constrói o DOM de venda
            let score = parseFloat(form.initialSalePrice) + (i * parseFloat(form.tickSize));
            this.offerList.push({
                score: score, 
                status: null, 
                total: 0, 
                queue: []
            });
        }
        this.offerList.unshift({
            score: parseFloat(form.initialPurchasePrice), 
            status: null,
            total: 0,
            queue: []
        })
        for(let i = 1; i < 30; i++){    //Constrói o DOM de compra
            let score = parseFloat(form.initialPurchasePrice) - (i * parseFloat(form.tickSize));
            this.offerList.unshift({
                score: score, 
                status: null, 
                total: 0, 
                queue: []
            });
        }
    }

    public makeOffer(offer: Offer){
        let result = 'teased';
        //--------------------- Se for uma oferta de COMPRA ---------------------
        if(offer.type === OfferType.PURCHASE){

            //Se o score da oferta ainda não tiver sido instanciado:
            if(this.scoreExists(offer.score) === -1){
                let i = 1;
                let bottomScore = this.offerList[0].score;
                do{     //Instancia preços pra baixo até o score existir
                    this.offerList.unshift({
                        score: bottomScore - (i * this.tickSize), 
                        status: OfferType.PURCHASE, 
                        total: 0, 
                        queue: []
                    });
                    i++;
                }while(this.scoreExists(offer.score) === -1);
            }
            
            
            const bestPrice = this.getBestSaleScore();
            let bestPriceIndex = this.getScoreIndex(bestPrice);
            /*Caso a oferta esteja acima ou igual o melhor preço de venda 
            e este preço tenha ofertas apregoadas: */
            if(offer.score >= bestPrice && this.offerList[bestPriceIndex].status === OfferType.SALE){
                do {    //Fecha os negócios no melhor preço:
                    let dealResult = this.offerList[bestPriceIndex].queue[0].quantity - offer.quantity;
                    if(dealResult > 0){   //Caso a oferta apregoada não tenha sido totalmente consumida
                        //Fecha o negócio:
                        this.offerList[bestPriceIndex].queue[0].quantity -= offer.quantity;
                        let deal = new Deal(offer.quantity, bestPrice, offer.type, offer.sendingPlayerId, 
                        this.offerList[bestPriceIndex].queue[0].sendingPlayerId, this.marketService.clock);
                        offer.quantity = 0;
                        this.dealList.push(deal);
                        //Envia os lotes negociados pros players envolvidos:
                        this.marketService.dealMade(deal);
                        result = 'completed';
                    }
                    //Caso a oferta apregoada tenha sido totalmente consumida:
                    else if(dealResult === 0){      
                        //Fecha o negócio:
                        let deal = new Deal(offer.quantity, bestPrice, offer.type, offer.sendingPlayerId, 
                        this.offerList[bestPriceIndex].queue[0].sendingPlayerId, this.marketService.clock);
                        offer.quantity = 0;
                        this.dealList.push(deal);
                        //Envia os lotes negociados pros players envolvidos:
                        this.marketService.dealMade(deal);
                        //Elimina a oferta apregoada da fila desta pontuação:
                        this.offerList[bestPriceIndex].queue.splice(0, 1);
                        result = 'completed';
                    }
                    else{   /*Caso a oferta apregoada tenha sido totalmente 
                        consumida e ainda sobrar compra*/
                        //Fecha o negócio:
                        offer.quantity -= this.offerList[bestPriceIndex].queue[0].quantity;
                        let deal = new Deal(this.offerList[bestPriceIndex].queue[0].quantity, 
                        bestPrice, offer.type, offer.sendingPlayerId, 
                        this.offerList[bestPriceIndex].queue[0].sendingPlayerId, this.marketService.clock);
                        this.dealList.push(deal);
                        //Envia os lotes negociados pros players envolvidos:
                        this.marketService.dealMade(deal);
                        //Elimina a oferta apregoada da fila desta pontuação:
                        this.offerList[bestPriceIndex].queue.splice(0, 1);
                        result = 'parcial';
                    }
                    //Finalmente, recalcula o total de ofertas nesta pontuação:
                    this.rebuildScoreTotal(bestPrice);
                }while(offer.quantity > 0 && this.offerList[bestPriceIndex].total > 0);

                //Caso todas as ofertas desta pontuação tenham sido esgotadas:
                if(this.offerList[bestPriceIndex].total === 0){
                    //Deixa em status neutro:
                    this.offerList[bestPriceIndex].status = null;
                    if(offer.quantity > 0){
                        //Transforma esta pontuação em compra:
                        this.offerList[bestPriceIndex].status = OfferType.PURCHASE;
                        //Deixa o restante apregoado nesta pontuação:
                        offer.score = bestPrice;
                        this.teaseOffer(offer);
                    }
                }

                //Finalmente, emite o evento avisando que o histórico de negócios mudou:
                this.marketService.dealListHasChanged(this.dealList);
            }
            else{        //Caso a oferta esteja abaixo do melhor preço de venda, apregoa:
                let offerIndex = this.getScoreIndex(offer.score);
                this.offerList[offerIndex].status = offer.type;
                this.teaseOffer(offer);
            }
        }

        //--------------------- Se for uma oferta de VENDA ---------------------
        else if(offer.type === OfferType.SALE){
            //Se o score da oferta ainda não tiver sido instanciado:
            if(this.scoreExists(offer.score) === -1){
                let i = 1;
                let bottomScore = this.offerList[0].score;
                do{     //Instancia preços pra baixo até o score existir
                    this.offerList.unshift({
                        score: bottomScore - (i * this.tickSize), 
                        status: OfferType.SALE, 
                        total: 0, 
                        queue: []
                    });
                    i++;
                }while(this.scoreExists(offer.score) === -1);
            }

            //Caso a oferta esteja acima ou igual o melhor preço de compra e este preço tenha ofertas apregoadas:
            const bestPrice = this.getBestPurchaseScore();
            let bestPriceindex = this.getScoreIndex(bestPrice);
            if(offer.score <= bestPrice && this.offerList[bestPriceindex].status === OfferType.PURCHASE){
                do {    //Fecha os negócios no melhor preço:
                    let dealResult = this.offerList[bestPriceindex].queue[0].quantity - offer.quantity;
                    if(dealResult > 0){   //Caso a oferta apregoada não tenha sido totalmente consumida
                        //Fecha o negócio:
                        this.offerList[bestPriceindex].queue[0].quantity -= offer.quantity;
                        let deal = new Deal(offer.quantity, bestPrice, offer.type, offer.sendingPlayerId, 
                        this.offerList[bestPriceindex].queue[0].sendingPlayerId, this.marketService.clock);
                        offer.quantity = 0;
                        this.dealList.push(deal);
                        //Envia os lotes negociados pros players envolvidos:
                        this.marketService.dealMade(deal);
                        result = 'completed';
                    }
                    //Caso a oferta apregoada tenha sido totalmente consumida:
                    else if(dealResult === 0){      
                        //Fecha o negócio:
                        let deal = new Deal(offer.quantity, bestPrice, offer.type, offer.sendingPlayerId, 
                        this.offerList[bestPriceindex].queue[0].sendingPlayerId, this.marketService.clock);
                        offer.quantity = 0;
                        this.dealList.push(deal);
                        //Envia os lotes negociados pros players envolvidos:
                        this.marketService.dealMade(deal);
                        //Elimina a oferta apregoada da fila desta pontuação:
                        this.offerList[bestPriceindex].queue.splice(0, 1);   
                        result = 'completed';
                    }
                    else{   //Caso a oferta apregoada tenha sido totalmente consumida e ainda sobrar compra
                        //Fecha o negócio:
                        offer.quantity -= this.offerList[bestPriceindex].queue[0].quantity;
                        let deal = new Deal(this.offerList[bestPriceindex].queue[0].quantity, 
                        bestPrice, offer.type, offer.sendingPlayerId, 
                        this.offerList[bestPriceindex].queue[0].sendingPlayerId, this.marketService.clock);
                        this.dealList.push(deal);
                        //Envia os lotes negociados pros players envolvidos:
                        this.marketService.dealMade(deal);
                        //Elimina a oferta apregoada da fila desta pontuação:
                        this.offerList[bestPriceindex].queue.splice(0, 1);
                        result = 'parcial';
                    }
                    //Finalmente, recalcula o total de ofertas nesta pontuação:
                    this.rebuildScoreTotal(bestPrice);
                }while(offer.quantity > 0 && this.offerList[bestPriceindex].total > 0);

                //Caso todas as ofertas desta pontuação tenham sido esgotadas:
                if(this.offerList[bestPriceindex].total === 0){
                    //Deixa em status neutro:
                    this.offerList[bestPriceindex].status = null;
                    if(offer.quantity > 0){
                        //Transforma esta pontuação em compra:
                        this.offerList[bestPriceindex].status = OfferType.SALE;
                        //Deixa o restante apregoado nesta pontuação:
                        offer.score = bestPrice;
                        this.teaseOffer(offer);
                    }
                }

                //Finalmente, emite o evento avisando que o histórico de negócios mudou:
                this.marketService.dealListHasChanged(this.dealList);
            }
            else{        //Caso a oferta esteja abaixo do melhor preço de venda, apregoa:
                let offerIndex = this.getScoreIndex(offer.score);
                this.offerList[offerIndex].status = offer.type;
                this.teaseOffer(offer);
            }
        }

        //Por último, emite o evento de atualizar a lista de ofertas:
        this.marketService.offerListHasChanged(this.offerList);

        return result;      //Retorna o pré-resultado da ordem
    }

    private scoreExists(score: number){
        let found = false;
        let i = 0;
        let scoreIndex
        while(!found && i < this.offerList.length){
            if(this.offerList[i].score === score)
                found = true;
                scoreIndex = i;
            i++;
        }
        return scoreIndex;
    }

    /**
     * Recaulcula o total de ofertas na pontuação especificada, após o fechamento de negócios
     */
    private rebuildScoreTotal(score: number){
        let index = this.getScoreIndex(score);
        let total = 0;
        this.offerList[index].queue.forEach((offer, o) => {
            total += offer.quantity;
        })
        this.offerList[index].total = total;
        if(total === 0){
            this.offerList[index].status = null;
        }
    }

    /**
     * Apregoa a oferta na pontuação dela
     */
    private teaseOffer(offer: Offer){
        this.offerList.forEach((offerScore, os) => {
            if(offerScore.score === offer.score){
                offerScore.queue.push(offer);
            }
        })
        this.rebuildScoreTotal(offer.score);
    }

    /**
     * Retorna o índice da pontuação na lista de ofertas
     */
    private getScoreIndex(score: number){
        let scoreIndex = -1;
        this.offerList.forEach((offerScore, os) => {
            if(offerScore.score === score)
                scoreIndex = os;
        })
        return scoreIndex;
    }

    /**
     * Retorna o valor do MAIOR preço que o mercado está comprando
     */
    public getBestPurchaseScore(){
        let bestPrice = 0;
        this.offerList.forEach((offerScore, os) => {
            if(offerScore.score > bestPrice && offerScore.status === OfferType.PURCHASE){
                bestPrice = offerScore.score;
            }
        })
        return (bestPrice === 0 ? this.initialPurchasePrice : bestPrice);
    }

    /**
     * Retorna o valor do MENOR preço que o mercado está vendendo
     */
    public getBestSaleScore(){
        let bestPrice = Infinity;
        this.offerList.forEach((offerScore, os) => {
            if(offerScore.score < bestPrice && offerScore.status === OfferType.SALE){
                bestPrice = offerScore.score;
            }
        })
        return (bestPrice === Infinity ? this.initialSalePrice : bestPrice);
    }

    /**
     * Cancela a oferta com o id e o score especificado
     */
    public cancelOffer(id, score){
        let quantity = 0;
        this.offerList.forEach((offerScore, os) => {
            if(offerScore.score === score){
                offerScore.queue.forEach((offer, o) => {
                    if(offer.id === id){
                        quantity = offer.quantity;
                        this.offerList[os].queue.splice(o, 1);
                        this.rebuildScoreTotal(score);
                        this.marketService.offerListHasChanged(this.offerList);
                    }
                })
            }
        })
        return quantity;
    }
}