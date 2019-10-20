import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameService } from '../../core/game.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
})
export class NewGameComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  newGame(){
    this.gameService.callNewGame();
  }

}
