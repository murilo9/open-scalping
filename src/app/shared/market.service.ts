import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Deal } from '../core/Deal';
import { OfferType } from '../core/OfferType';
import { Offer } from '../core/Offer';
import { Market } from '../core/Market';
import { NewGameForm } from '../core/NewGameForm';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  public market: Market;
  private offerListSubject = new Subject<Object>();
  public offerListChanged$ = this.offerListSubject.asObservable();
  private dealListSubject = new Subject<Array<Deal>>();
  public dealListChanged$ = this.dealListSubject.asObservable();
  public offerSubject = new Subject<Offer>();
  public offerSent$ = this.offerSubject.asObservable();
  
  constructor() { }

  public startMarket(form: NewGameForm){
    this.market = new Market(this, form);
  }

  public offerListHasChanged(offerList: Object){
    this.offerListSubject.next(offerList);    //Isto será emitido para os widgets
  }

  public dealListHasChanged(dealList: Array<Deal>){
    this.dealListSubject.next(dealList);
  }

  public makeSaleOffer(playerId, price, quantity){
    let offer = new Offer(quantity, price+'', OfferType.SALE, playerId);
    this.market.makeOffer(offer);
  }

  public makePurchaseOffer(playerId, price, quantity){
    let offer = new Offer(quantity, price+'', OfferType.PURCHASE, playerId);
    this.market.makeOffer(offer);
  }

  public getBestPurchaseScore(){
    return this.market.getBestPurchaseScore();
  }

  public getBestSaleScore(){
    return this.market.getBestSaleScore();
  }

}
