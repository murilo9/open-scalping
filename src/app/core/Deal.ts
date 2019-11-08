import { OfferType } from './OfferType';

export class Deal{
    quantity: number;
    score: number;
    type: OfferType;
    activePlayerId: number;
    passivePlayerId: number;
    time: Date;

    constructor(quantity: number, score: number, type: OfferType, 
    activePlayerId: number, passivePlayerId: number){
        this.quantity = quantity;
        this.score = score;
        this.type = type;
        this.activePlayerId = activePlayerId;
        this.passivePlayerId = passivePlayerId;
        this.time = new Date();
    }
}