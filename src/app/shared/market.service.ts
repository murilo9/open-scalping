import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Deal } from '../core/Deal';
import { OfferType } from '../core/OfferType';
import { Offer } from '../core/Offer';
import { Market, OfferScore } from '../core/Market';
import { NewGameForm } from '../core/NewGameForm';
import { Player } from '../core/Player';
import { Game } from '../core/Game';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  public market: Market;
  private newGameSubject = new Subject();
  public NewGameCalled$ = this.newGameSubject.asObservable();
  private offerListSubject = new Subject<Array<OfferScore>>();
  public offerListChanged$ = this.offerListSubject.asObservable();
  private dealListSubject = new Subject<Array<Deal>>();
  public dealListChanged$ = this.dealListSubject.asObservable();
  public offerSubject = new Subject<Offer>();
  public offerSent$ = this.offerSubject.asObservable();
  public dealMadeSubject = new Subject<Deal>();
  public dealMade$ = this.dealMadeSubject.asObservable();
  private pausedSubject = new Subject<boolean>();
  public paused$ = this.pausedSubject.asObservable();
  private playerMadeOfferSubject = new Subject<{offer: Offer, preResult: string}>();
  public playerMadeOffer$ = this.playerMadeOfferSubject.asObservable();
  initialPurchasePrice: number;
  initialSalePrice: number;
  minimumOfferSize: number;
  tickSize: number;
  lotPricePerScore: number;
  paused: boolean;
  clock: Date;
  playersIdList: Array<string>;   //Lista de labels dos jogadores onde os índices correspondem aos IDs
  game: Game;
  
  constructor() { }

  public callNewGame(form: NewGameForm){
    this.startMarket(form);
    this.playersIdList = [];
    this.initialPurchasePrice = parseFloat(form.initialPurchasePrice);
    this.initialSalePrice = parseFloat(form.initialSalePrice);
    this.minimumOfferSize = parseInt(form.minimumOfferSize);
    this.tickSize = parseFloat(form.tickSize);
    this.lotPricePerScore = parseFloat(form.lotPricePerScore);
    this.game = new Game(this, form);
    this.newGameSubject.next();
  }

  public startMarket(form: NewGameForm){
    this.market = new Market(this, form);
  }

  public offerListHasChanged(offerList: Array<OfferScore>){
    this.offerListSubject.next(offerList);    //Isto será emitido para os widgets
  }

  public dealListHasChanged(dealList: Array<Deal>){
    this.dealListSubject.next(dealList);
  }

  public makeSaleOffer(playerId, price, quantity){
    let offer = new Offer(quantity, price+'', OfferType.SALE, playerId);
    let result = this.market.makeOffer(offer);
    //Se a oferta foi feita pelo jogador, emite o evento:
    if(playerId === 0)
      this.playerMadeOfferSubject.next({offer: offer, preResult: result});
  }

  public makePurchaseOffer(playerId, price, quantity){
    let offer = new Offer(quantity, price+'', OfferType.PURCHASE, playerId);
    let result = this.market.makeOffer(offer);
    //Se a oferta foi feita pelo jogador, emite o evento:
    if (playerId === 0)
      this.playerMadeOfferSubject.next({ offer: offer, preResult: result });
  }

  public getBestPurchaseScore(){
    return this.market.getBestPurchaseScore();
  }

  public getBestSaleScore(){
    return this.market.getBestSaleScore();
  }

  public dealMade(deal: Deal){
    this.dealMadeSubject.next(deal);
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

  public playPause(paused: boolean){
    this.paused = paused;
    this.pausedSubject.next(paused);
  }

  public updateClock(clock: Date){
    this.clock = new Date(clock.getTime());
  }
}
