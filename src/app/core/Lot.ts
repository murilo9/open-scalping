import { OfferType } from './OfferType';

export class Lot{
    type: OfferType;
    score: number;
    price: number;

    constructor(type, score, price){
        this.type = type;
        this.score = score;
        this.price = price;
    }
}