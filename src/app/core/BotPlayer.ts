import { Player } from './Player';
import { MarketService } from '../shared/market.service';
import { GameService } from './game.service';
import { AppComponent } from '../app.component';

export class BotPlayer extends Player{

    private riskLevel: number;
    randomOffer: any;
    gameService: GameService;
    marketService: MarketService;
    appComponent: AppComponent;

    constructor(id: number, label: string, marketService: MarketService, 
        gameService: GameService, appComponent: AppComponent){
        super(id, label, marketService);
        this.human = false;
        this.randomOffer = setTimeout(() => { this.makeRandomOffer(); }, 5000 + Math.random()*50000);
        this.marketService = marketService;
        this.gameService = gameService;
        this.appComponent = appComponent;
        //Por enquanto o Bradesco sempre será o provedor da liquidez inicial:
        if(label === 'Bradesco'){       
            setTimeout(() => {
                let purchasePrice = parseFloat(appComponent.game.market.getBestPurchaseScore());
                let salePrice = parseFloat(appComponent.game.market.getBestSaleScore());
                this.marketService.makePurchaseOffer(this.id, purchasePrice, 10);
                this.marketService.makeSaleOffer(this.id, salePrice, 10);
            }, 10)
        }
    }

    private makeRandomOffer(){
        let buyOrSell = Math.random() > 0.5 ? true : false;
        let quantity = Math.floor(Math.random()*10);
        if(buyOrSell){      //Comprar
            let offerPrice = parseFloat(this.appComponent.game.market.getBestPurchaseScore()) - 
            Math.floor(-2 + Math.random()*12)*this.gameService.tickSize;
            this.marketService.makePurchaseOffer(this.id, offerPrice, quantity);
        }
        else{       //Vender
            let offerPrice = parseFloat(this.appComponent.game.market.getBestPurchaseScore()) + 
            Math.floor(-2 + Math.random()*12)*this.gameService.tickSize;
            this.marketService.makeSaleOffer(this.id, offerPrice, quantity);
        }
        //Reseta a função:
        this.randomOffer = setTimeout(() => { this.makeRandomOffer(); }, Math.random()*60000);
    }
}