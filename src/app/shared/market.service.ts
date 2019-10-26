import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Deal } from './Deal';
import { OfferType } from './OfferType';
import { Offer } from './Offer';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  private offerListSubject = new Subject<Object>();
  public offerListChanged$ = this.offerListSubject.asObservable();
  private dealListSubject = new Subject<Array<Deal>>();
  public dealListChanged$ = this.dealListSubject.asObservable();
  public offerSubject = new Subject<Offer>();
  public offerSent$ = this.offerSubject.asObservable();
  
  constructor() { }

  public offerListHasChanged(offerList: Object){
    this.offerListSubject.next(offerList);    //Isto será emitido para os widgets
  }

  public dealListHasChanged(dealList: Array<Deal>){
    this.dealListSubject.next(dealList);
  }

  public makeSaleOffer(playerId, price, quantity){
    this.offerSubject.next(new Offer(
      quantity, price+'', OfferType.SALE, playerId
    ))
  }

  public makePurchaseOffer(playerId, price, quantity){
    this.offerSubject.next(new Offer(
      quantity, price+'', OfferType.PURCHASE, playerId
    ))
  }

}
