import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { OfferLevel } from '../core/Market';
import { Deal } from './Deal';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  private offerListSubject = new Subject<Array<OfferLevel>>();
  public offerListChanged$ = this.offerListSubject.asObservable();
  private dealListSubject = new Subject<Array<Deal>>();
  public dealListChanged$ = this.dealListSubject.asObservable();
  
  constructor() { }

  public offerListHasChanged(offerList: Array<OfferLevel>){
    this.offerListSubject.next(offerList);    //Isto será emitido para os widgets
  }

  public dealListHasChanged(dealList: Array<Deal>){
    this.dealListSubject.next(dealList);
  }
}
