import { Component } from '@angular/core';
import { Game } from './core/Game';
import { GameService } from './core/game.service';
import { MarketService } from './shared/market.service';
import { Subscription } from 'rxjs';
import { Offer } from './shared/Offer';
import { OfferType } from './shared/OfferType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GameService, MarketService]
})
export class AppComponent {
  
  title = 'open-scalping';
  subscription: Subscription;
  public game: Game;

  constructor(private gameService: GameService, private marketService: MarketService){
    this.subscription = gameService.newGameCalled$.subscribe(() => {
      this.onNewGame();
    })
  }

  onNewGame(){
    this.game = new Game();
  }

  temp_apregoarVenda(){
    var offer = new Offer(3, 3175.50, OfferType.SALE, 0);
    this.game.market.makeOffer(offer);
  }

  temp_apregoarCompra(){
    var offer = new Offer(5, 3175.50, OfferType.PURCHASE, 1);
    this.game.market.makeOffer(offer);
  }
}
