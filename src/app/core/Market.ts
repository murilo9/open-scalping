import { Offer } from '../shared/Offer';
import { Deal } from '../shared/Deal';

import { OfferType } from '../shared/OfferType';
import { MarketService } from '../shared/market.service';
import { NewGameForm } from './NewGameForm';

/**
 * A forma que as ofertas aparecem no book de ofertas (ordenadas por score): um array de OfferScore
 */
export interface OfferScore {
    score: string,
    status: OfferType, 
    total: number, 
    queue: Array<Offer>
}

export class Market{
    
    offerList: Object;     //Lista de ofertas por ordem de pontuação (score)
    dealList: Array<Deal>;      //Lista de negócios fechados ordenados por tempo
    tickSize: number;       //Variação mínima da pontuação
    minimumOfferSize: number;       //Quantidade mínima de lotes por oferta
    initialPurchasePrice: number;
    initialSalePrice: number;

    constructor(private marketService: MarketService, form: NewGameForm){
        this.offerList = {};
        this.dealList = [];
        this.tickSize = parseFloat(form.tickSize);
        this.minimumOfferSize = parseInt(form.minimumOfferSize);
        this.initialPurchasePrice = parseFloat(form.initialPurchasePrice);
        this.initialSalePrice = parseFloat(form.initialSalePrice);
        //setInterval(() => {this.logPrices()}, 5000);
    }

    public makeOffer(offer: Offer){
        console.log(offer)
        //Instancia este preço caso ele ainda não tenha sido instanciado
        if(this.offerList[offer.score] === undefined || this.offerList[offer.score].total == 0){
            console.log('score inexistente no offerList ('+offer.score+'), instanciando')
            this.offerList[offer.score] = {status: offer.type, score: offer.score, total: 0, queue: []}
        }

        //--------------- Se for uma oferta de COMPRA ---------------
        if(offer.type == OfferType.PURCHASE){   
            //Se houver uma oferta de venda neste preço, fecha negócio:
            if(this.offerList[offer.score].status == OfferType.SALE ||
            parseFloat(offer.score) >= parseFloat(this.getBestSaleScore())){
                //A compra é feita necessariamente no melhor preço do mercado:
                let bestScore = this.getBestSaleScore();     
                do{     //Fecha negócio
                    let dealSize = 0;
                    do{     //Fecha negócio 
                        offer.quantity -= 1;
                        console.log(this.offerList[bestScore])
                        this.offerList[bestScore].queue[0].quantity -= 1;
                        dealSize += 1;
                    }while   //...enquanto houverem lotes apregoados nesta oferta
                    (this.offerList[bestScore].queue[0].quantity > 0 && offer.quantity > 0);
                    //Registra um negócio, neste preço, com esta quantidade, no histórico de negócios:
                    const deal = new Deal(dealSize, parseFloat(bestScore), offer.type, offer.sendingPlayerId, 
                    this.offerList[bestScore].queue[0].sendingPlayerId);
                    this.dealList.push(deal);
                    this.marketService.dealListHasChanged(this.dealList);
                    //Remove a oferta apregoada da lista caso ela tenha sido totalmente fechada:
                    if(this.offerList[bestScore].queue[0].quantity == 0){
                        this.offerList[bestScore].queue.splice(0, 1);
                    }
                }while      //...enquanto houverem ofertas de venda apregoadas neste preço
                (this.offerList[bestScore].queue.length > 0 && offer.quantity > 0);
                //Caso a oferta não tenha sido totalmente fechada, deixa o restante apregoado neste preço:
                if(offer.quantity > 0){
                    this.offerList[bestScore].queue.push(offer);
                    this.offerList[bestScore].status = OfferType.PURCHASE;    //Atualiza o status deste preço
                }
            }
            else{       //Caso contrário, deixa a oferta apregoada nesta pontuação:
                this.offerList[offer.score].queue.push(offer);
            }
        }

        //--------------- Se for uma oferta de VENDA ---------------
        if(offer.type == OfferType.SALE){   
            //Se houver uma oferta de compra neste preço, fecha negócio:
            if(this.offerList[offer.score].status == OfferType.PURCHASE ||
            parseFloat(offer.score) <= parseFloat(this.getBestPurchaseScore())){
                //A venda é feita necessariamente no melhor preço do mercado:
                let bestScore = this.getBestPurchaseScore(); 
                do{     //Fecha negócio
                    let dealSize = 0;
                    do{     //Fecha negócio 
                        offer.quantity -= 1;
                        console.log(this.offerList[bestScore])
                        this.offerList[bestScore].queue[0].quantity -= 1;
                        dealSize += 1;
                    }while   //...enquanto houverem lotes apregoados nesta oferta
                    (this.offerList[bestScore].queue[0].quantity > 0 && offer.quantity > 0);
                    //Registra um negócio, neste preço, com esta quantidade, no histórico de negócios:
                    const deal = new Deal(dealSize, parseFloat(bestScore), offer.type, offer.sendingPlayerId, 
                    this.offerList[bestScore].queue[0].sendingPlayerId);
                    this.dealList.push(deal);
                    this.marketService.dealListHasChanged(this.dealList);
                    //Remove a oferta apregoada da lista caso ela tenha sido totalmente fechada:
                    if(this.offerList[bestScore].queue[0].quantity == 0){
                        this.offerList[bestScore].queue.splice(0, 1);
                    }
                }while      //...enquanto houverem ofertas de compra apregoadas neste preço
                (this.offerList[bestScore].queue.length > 0 && offer.quantity > 0);
                //Caso a oferta não tenha sido totalmente fechada, deixa o restante apregoado neste preço:
                if(offer.quantity > 0){
                    this.offerList[bestScore].queue.push(offer);
                    this.offerList[bestScore].status = OfferType.SALE;    //Atualiza o status deste preço
                }
            }
            else{       //Caso contrário, deixa a oferta apregoada nesta pontuação:
                this.offerList[offer.score].queue.push(offer);
            }
        }

        this.refreshOfferList(offer.score)      //Finalmente, atualiza o total de ofertas neste preço:
        this.marketService.offerListHasChanged(this.offerList);
        console.log('----------- momento ---------------')
        console.log(this.offerList);
        //console.log(this.dealList);
        return status;      //Retorna o status da operação ('offered'/'parcial'/'total')
    }

    /**
     * Atualiza e reacalcula o total de ofertas neste preço
     */
    private refreshOfferList(score: string){
        this.offerList[score].total = 0;
        this.offerList[score].queue.forEach((existingOffer, eoIndex) => {
            this.offerList[score].total += existingOffer.quantity;
        })
    }

    /**
     * Retorna o melhor (maior) preço de compra do mercado, em string
     */
    public getBestPurchaseScore(){
        let maxScore = '';
        let maxScoreValue = 0;
        for(let score in this.offerList){       //Para cada score
            if(this.offerList[score].status == OfferType.PURCHASE &&
            this.offerList[score].score > maxScoreValue){
                maxScore = score;
                maxScoreValue = this.offerList[score].score;
            }
        }
        return (maxScoreValue > 0 ? maxScore : this.initialPurchasePrice.toFixed(2));
    }

    /**
     * Retorna o melhor (menor) preço de venda do mercado, em string
     */
    public getBestSaleScore(){
        let minScore = '';
        let minScoreValue = Infinity;
        for(let score in this.offerList){       //Para cada score
            if(this.offerList[score].status == OfferType.SALE &&
            this.offerList[score].score < minScoreValue){
                minScore = score;
                minScoreValue = this.offerList[score].score;
            }
        }
        return (minScoreValue === Infinity ? this.initialSalePrice.toFixed(2) : minScore);
    }

    logPrices(){
        console.log('Melhor compra: ' + this.getBestPurchaseScore());
        console.log('Melhor venda: ' + this.getBestSaleScore());
    }
}