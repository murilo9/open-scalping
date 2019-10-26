import { OfferType } from './OfferType';

export class Offer{
    quantity: number;
    score: string;
    type: OfferType;
    sendingPlayerId: number;

    constructor(quantity: number, score: string, type: OfferType, sendingPlayerId: number){
        this.quantity = quantity;
        this.score = score+'';
        this.type = type;
        this.sendingPlayerId = sendingPlayerId;
    }
}