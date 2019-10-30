import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Game } from './core/Game';
import { GameService } from './core/game.service';
import { MarketService } from './shared/market.service';
import { Subscription } from 'rxjs';
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
  subscription2: Subscription;
  public game: Game;

  constructor(
    private gameService: GameService, 
    private marketService: MarketService,
    private router: Router){
    this.subscription1 = gameService.newGameCalled$.subscribe((form: NewGameForm) => {
      this.onNewGame(form);
    })
    this.subscription2 = marketService.offerSent$.subscribe((offer) => {
      this.game.market.makeOffer(offer);
    })
  }

  onNewGame(form: NewGameForm){
    this.gameStarted = true;
    this.game = new Game(this.marketService, this.gameService, this, form);
    this.router.navigateByUrl('/play');
  }
}
