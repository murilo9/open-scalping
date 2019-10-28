import { Player } from './Player';
import { MarketService } from '../shared/market.service';
import { GameService } from './game.service';

export class BotPlayer extends Player{

    private riskLevel: number;
    randomOffer: any;
    gameService: GameService;
    marketService: MarketService;

    constructor(id: number, label: string, marketService: MarketService, gameService: GameService){
        super(id, label, marketService);
        this.human = false;
        this.randomOffer = setTimeout(() => { this.makeRandomOffer(); }, 5000 + Math.random()*50000);
        this.marketService = marketService;
        this.gameService = gameService;
    }

    private makeRandomOffer(){
        let buyOrSell = Math.random() > 0.5 ? true : false;
        let quantity = Math.floor(Math.random()*10);
        if(buyOrSell){      //Comprar
            let offerPrice = this.gameService.initialPurchasePrice - 
            Math.floor(-2 + Math.random()*12)*this.gameService.tickSize;
            this.marketService.makePurchaseOffer(this.id, offerPrice, quantity);
        }
        else{       //Vender
            let offerPrice = this.gameService.initialSalePrice + 
            Math.floor(-2 + Math.random()*12)*this.gameService.tickSize;
            this.marketService.makeSaleOffer(this.id, offerPrice, quantity);
        }
        //Reseta a função:
        this.randomOffer = setTimeout(() => { this.makeRandomOffer(); }, Math.random()*60000);
    }
}