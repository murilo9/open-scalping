import { AI } from './AI';
import { MarketService } from '../shared/market.service';
import { Player } from '../core/Player';
import { Subscription } from 'rxjs';

export class MarketMaking extends AI {
    private acting: any;
    private actiTime: number;
    private baseOfferQty: number;   //Quantidade de lotes ofertados
    subscription1: Subscription;

    constructor(private marketService: MarketService, player: Player){
        super(marketService, player);
        //Atua a cada 10 ~ 15 segundos:
        let timeSecs = 10 + Math.floor(Math.random() * 5);
        this.acting = setInterval(() => {this.act()}, 1000 * timeSecs);
    }

    private act(){
        console.log('market maker acting')
        let bestPurchaseScore = this.marketService.getBestPurchaseScore();
        let bestSaleScore = this.marketService.getBestSaleScore();
        let offerList = this.marketService.market.offerList;
        let minimumOfferQty = this.marketService.minimumOfferSize;
        //Verifica os níveis de preço:
        offerList.forEach((offerScore, o) => {
            if(offerScore.score === bestSaleScore){     //Verifica o melhor preço de venda
                if(offerScore.total < minimumOfferQty*5){       //Se houverem poucas ofertas
                    //Apregoa 10 lotes:
                    this.marketService.makeSaleOffer(
                        this.player.id, bestSaleScore, minimumOfferQty*10
                    )
                }
            }
            //Verifica 1 tick acima do melhor preço de venda:
            if(offerScore.score === bestSaleScore + this.marketService.tickSize){     
                if(offerScore.total < minimumOfferQty*5){       //Se houverem poucas ofertas
                    //Apregoa:
                    this.marketService.makeSaleOffer(
                        this.player.id, 
                        bestSaleScore + this.marketService.tickSize, 
                        minimumOfferQty*10
                    )
                }
            }
            //Verifica 2 ticks acima do melhor preço de venda:
            if(offerScore.score === bestSaleScore + (2 * this.marketService.tickSize)){     
                if(offerScore.total < minimumOfferQty*5){       //Se houverem poucas ofertas
                    //Apregoa:
                    this.marketService.makeSaleOffer(
                        this.player.id, 
                        bestSaleScore + (2 * this.marketService.tickSize), 
                        minimumOfferQty*10
                    )
                }
            }
            if(offerScore.score === bestPurchaseScore){     //Verifica o melhor preço de compra
                if(offerScore.total < minimumOfferQty*5){       //Se houverem poucas ofertas
                    //Apregoa 10 lotes:
                    this.marketService.makePurchaseOffer(
                        this.player.id, bestPurchaseScore, minimumOfferQty*10
                    )
                }
            }
            //Verifica 1 tick abaixo do melhor preço de compra:
            if(offerScore.score === bestPurchaseScore - this.marketService.tickSize){     
                if(offerScore.total < minimumOfferQty*5){       //Se houverem poucas ofertas
                    //Apregoa:
                    this.marketService.makePurchaseOffer(
                        this.player.id, 
                        bestPurchaseScore - this.marketService.tickSize, 
                        minimumOfferQty*10
                    )
                }
            }
            //Verifica 2 ticks abaixo do melhor preço de compra:
            if(offerScore.score === bestPurchaseScore - (2 * this.marketService.tickSize)){     
                if(offerScore.total < minimumOfferQty*5){       //Se houverem poucas ofertas
                    //Apregoa:
                    this.marketService.makePurchaseOffer(
                        this.player.id, 
                        bestPurchaseScore - (2 * this.marketService.tickSize), 
                        minimumOfferQty*10
                    )
                }
            }
        })
    }
}