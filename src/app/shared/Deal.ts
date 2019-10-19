import { OfferType } from './OfferType';

export class Deal{
    public quantity: Number;
    public price: Number;
    public type: OfferType;
    public sendingPlayerId: Number;
    public takingPlayerId: Number;
}