import { OfferType } from './OfferType';

export class Offer{
    private quantity: number;
    private price: number;
    private type: OfferType;
    private sendingPlayerId: number;

    public setQuantity(quantity: number){
        if(this.quantity + quantity < 0){
            return false;
        }
        else{
            this.quantity += quantity;
            if(this.quantity == 0){
                //TODO - Destroy this offer
            }
            return true
        }
    }
}