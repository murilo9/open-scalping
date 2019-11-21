import { OfferType } from './OfferType';

export class Offer{
    id: number;
    quantity: number;
    score: number;
    type: OfferType;
    sendingPlayerId: number;

    constructor(id: number, quantity: number, score: string, 
    type: OfferType, sendingPlayerId: number){
        this.id = id;
        this.quantity = quantity;
        this.score = parseFloat(score);
        this.type = type;
        this.sendingPlayerId = sendingPlayerId;
    }
}