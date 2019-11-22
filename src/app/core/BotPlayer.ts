import { Player } from './Player';
import { MarketService } from '../shared/market.service';
import { Subscription } from 'rxjs';

export class BotPlayer extends Player{

    private riskLevel: number;
    private mayAct: boolean;
    randomOffer: any;
    marketService: MarketService;
    subscription1: Subscription;

    constructor(id: number, label: string, marketService: MarketService){
        super(id, label, marketService);
        this.human = false;
        this.mayAct = true;
        this.randomOffer = setTimeout(() => { this.makeRandomOffer(); }, 5000 + Math.random()*50000);
        this.marketService = marketService;
        this.subscription1 = this.marketService.paused$.subscribe((paused) => {
            this.mayAct = !paused;
        });
        //Por enquanto o Bradesco sempre será o provedor da liquidez inicial:
        /*if(label === 'Bradesco'){       
            setTimeout(() => {
                let purchasePrice = this.marketService.getBestPurchaseScore();
                let salePrice = this.marketService.getBestSaleScore();
                this.marketService.makePurchaseOffer(this.id, purchasePrice, 10);
                this.marketService.makeSaleOffer(this.id, salePrice, 10);
            }, 10)
        }*/
    }

    private makeRandomOffer(){
        if(this.mayAct){
            let buyOrSell = Math.random() > 0.49 ? true : false;
            let quantity = 1 + Math.floor(Math.random()*9);
            if(buyOrSell){      //Comprar
                let offerPrice = this.marketService.getBestPurchaseScore() - 
                Math.floor(-2 + Math.random()*12)*this.marketService.tickSize;
                this.marketService.makePurchaseOffer(this.id, offerPrice, quantity);
            }
            else{       //Vender
                let offerPrice = this.marketService.getBestPurchaseScore() + 
                Math.floor(-2 + Math.random()*12)*this.marketService.tickSize;
                this.marketService.makeSaleOffer(this.id, offerPrice, quantity);
            }
            //Reseta a função:
            this.randomOffer = setTimeout(() => { this.makeRandomOffer(); }, Math.random()*60000);
        }
    }
}