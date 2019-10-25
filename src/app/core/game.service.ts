import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NewGameForm } from './NewGameForm';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  newGameSubject = new Subject<Object>();
  newGameCalled$ = this.newGameSubject.asObservable();
  initialPurchasePrice: Number;
  initialSalePrice: Number;
  minimumOfferSize: Number;

  constructor() { }

  public callNewGame(form: NewGameForm){
    this.initialPurchasePrice = form.initialPurchasePrice;
    this.initialSalePrice = form.initialSalePrice;
    this.minimumOfferSize = form.minimumOfferSize;
    this.newGameSubject.next(form);
  }
}
