import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Game } from './core/Game';
import { GameService } from './core/game.service';
import { MarketService } from './shared/market.service';
import { Subscription } from 'rxjs';
import { Offer } from './shared/Offer';
import { OfferType } from './shared/OfferType';
import { OfferLevel } from './core/Market';
import { NewGameForm } from './core/NewGameForm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GameService, MarketService]
})
export class AppComponent {
  
  title = 'open-scalping';
  gameStarted = false;
  subscription1: Subscription;
  public game: Game;

  constructor(
    private gameService: GameService, 
    private marketService: MarketService,
    private router: Router){
    this.subscription1 = gameService.newGameCalled$.subscribe((form: NewGameForm) => {
      this.onNewGame(form);
    })
  }

  onNewGame(form: NewGameForm){
    this.gameStarted = true;
    this.game = new Game(this.marketService, form);
    this.router.navigateByUrl('/play');
  }

  temp_apregoarVenda(){
    var offer = new Offer(2, 3175.50, OfferType.SALE, 0);
    this.game.market.makeOffer(offer);
  }

  temp_apregoarCompra(){
    var offer = new Offer(3, 3175.50, OfferType.PURCHASE, 1);
    this.game.market.makeOffer(offer);
  }
}
