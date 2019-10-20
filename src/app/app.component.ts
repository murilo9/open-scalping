import { Component } from '@angular/core';
import { Game } from './core/Game';
import { GameService } from './core/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GameService]
})
export class AppComponent {
  
  title = 'open-scalping';
  subscription: Subscription;
  public game: Game;

  constructor(private gameService: GameService){
    this.subscription = gameService.newGameCalled$.subscribe(() => {
      this.onNewGame();
    })
  }

  onNewGame(){
    this.game = new Game();
  }
}
