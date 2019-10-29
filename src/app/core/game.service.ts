import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NewGameForm } from './NewGameForm';
import { Player } from './Player';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  newGameSubject = new Subject<Object>();
  newGameCalled$ = this.newGameSubject.asObservable();
  initialPurchasePrice: number;
  initialSalePrice: number;
  minimumOfferSize: number;
  tickSize: number;
  playersIdList: Array<string>;   //Lista de labels dos jogadores onde os índices correspondem aos IDs

  constructor() {
    this.playersIdList = [];
   }

  public callNewGame(form: NewGameForm){
    this.initialPurchasePrice = parseFloat(form.initialPurchasePrice);
    this.initialSalePrice = parseFloat(form.initialSalePrice);
    this.minimumOfferSize = parseInt(form.minimumOfferSize);
    this.tickSize = parseFloat(form.tickSize);
    this.newGameSubject.next(form);
  }

  public setPlayersList(playersList: Array<Player>){
    playersList.forEach((player, p) => {
      this.playersIdList.push(player.label);
    })
  }

  public getPlayerLabel(id: number){
    let label = '(null)';
    this.playersIdList.forEach((playerLabel, p) => {
      if(p == id)
        label = playerLabel;
    })
    return label;
  }
}
