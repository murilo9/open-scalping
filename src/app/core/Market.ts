import { Offer } from '../shared/Offer';
import { Deal } from '../shared/Deal';

import { OfferType } from '../shared/OfferType';
import { MarketService } from '../shared/market.service';
import { NewGameForm } from './NewGameForm';

/**
 * A forma que as ofertas aparecem no book de ofertas (ordenadas por score): um array de OfferScore
 */
export interface OfferScore {
    score: String,
    status: OfferType, 
    total: number, 
    queue: Array<Offer>
}

export class Market{
    
    offerList: Object;     //Lista de ofertas por ordem de pontuação (score)
    dealList: Array<Deal>;
    tickSize: Number;
    minimumOfferSize: Number;

    constructor(private marketService: MarketService, form: NewGameForm){
        this.offerList = {};
        this.dealList = [];
        this.tickSize = form.tickSize;
        this.minimumOfferSize = form.minimumOfferSize;
    }

    public makeOffer(offer: Offer){
        //Instancia este preço caso ele ainda não tenha sido instanciado
        if(this.offerList[offer.score] === undefined || this.offerList[offer.score].total == 0){
            this.offerList[offer.score] = {status: offer.type, score: offer.score, total: 0, queue: []}
        }

        //--------------- Se for uma oferta de COMPRA ---------------
        if(offer.type == OfferType.PURCHASE){   
            //Se houver uma oferta de venda neste preço, fecha negócio:
            if(this.offerList[offer.score].status == OfferType.SALE){
                do{     //Fecha negócio
                    var dealSize = 0;
                    do{     //Fecha negócio 
                        offer.quantity -= 1;
                        this.offerList[offer.score].queue[0].quantity -= 1;
                        dealSize += 1;
                    }while   //...enquanto houverem lotes apregoados nesta oferta
                    (this.offerList[offer.score].queue[0].quantity > 0 && offer.quantity > 0);
                    //Registra um negócio, neste preço, com esta quantidade, no histórico de negócios:
                    var deal = new Deal(dealSize, parseFloat(offer.score), offer.type, offer.sendingPlayerId, 
                    this.offerList[offer.score].queue[0].sendingPlayerId);
                    this.dealList.push(deal);
                    this.marketService.dealListHasChanged(this.dealList);
                    //Remove a oferta apregoada da lista caso ela tenha sido totalmente fechada:
                    if(this.offerList[offer.score].queue[0].quantity == 0){
                        this.offerList[offer.score].queue.splice(0, 1);
                    }
                }while      //...enquanto houverem ofertas de venda apregoadas neste preço
                (this.offerList[offer.score].queue.length > 0 && offer.quantity > 0);
                //Caso a oferta não tenha sido totalmente fechada, deixa o restante apregoado neste preço:
                if(offer.quantity > 0){
                    this.offerList[offer.score].queue.push(offer);
                    this.offerList[offer.score].status = OfferType.PURCHASE;    //Atualiza o status deste preço
                }
            }
            else{       //Caso contrário, deixa a oferta apregoada nesta pontuação:
                this.offerList[offer.score].queue.push(offer);
            }
        }

        //--------------- Se for uma oferta de VENDA ---------------
        if(offer.type == OfferType.SALE){   
            //Se houver uma oferta de compra neste preço, fecha negócio:
            if(this.offerList[offer.score].status == OfferType.PURCHASE){
                do{     //Fecha negócio
                    var dealSize = 0;
                    do{     //Fecha negócio 
                        offer.quantity -= 1;
                        this.offerList[offer.score].queue[0].quantity -= 1;
                        dealSize += 1;
                    }while   //...enquanto houverem lotes apregoados nesta oferta
                    (this.offerList[offer.score].queue[0].quantity > 0 && offer.quantity > 0);
                    //Registra um negócio, neste preço, com esta quantidade, no histórico de negócios:
                    var deal = new Deal(dealSize, parseFloat(offer.score), offer.type, offer.sendingPlayerId, 
                    this.offerList[offer.score].queue[0].sendingPlayerId);
                    this.dealList.push(deal);
                    this.marketService.dealListHasChanged(this.dealList);
                    //Remove a oferta apregoada da lista caso ela tenha sido totalmente fechada:
                    if(this.offerList[offer.score].queue[0].quantity == 0){
                        this.offerList[offer.score].queue.splice(0, 1);
                    }
                }while      //...enquanto houverem ofertas de compra apregoadas neste preço
                (this.offerList[offer.score].queue.length > 0 && offer.quantity > 0);
                //Caso a oferta não tenha sido totalmente fechada, deixa o restante apregoado neste preço:
                if(offer.quantity > 0){
                    this.offerList[offer.score].queue.push(offer);
                    this.offerList[offer.score].status = OfferType.SALE;    //Atualiza o status deste preço
                }
            }
            else{       //Caso contrário, deixa a oferta apregoada nesta pontuação:
                this.offerList[offer.score].queue.push(offer);
            }
        }

        this.refreshOfferList(offer.score)      //Finalmente, atualiza o total de ofertas neste preço:
        this.marketService.offerListHasChanged(this.offerList);
        /*console.log('----------- momento ---------------')
        console.log(this.offerList);
        console.log(this.dealList);*/
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
}