import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { GameService } from '../../core/game.service';
import { NewGameForm } from 'src/app/core/NewGameForm';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  form: NewGameForm = {
    playersQty: 30,
    initialPurchasePrice: 65370,
    initialSalePrice: 65370.5,
    tickSize: 0.5,
    minimumOfferSize: 1,
  };

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  newGame(){
    this.gameService.callNewGame(this.form);
  }

}
