import { OfferType } from './OfferType';

export class Offer{
    quantity: number;
    score: number;
    type: OfferType;
    sendingPlayerId: number;

    constructor(quantity: number, score: string, type: OfferType, sendingPlayerId: number){
        this.quantity = quantity;
        this.score = parseFloat(score);
        this.type = type;
        this.sendingPlayerId = sendingPlayerId;
    }
}