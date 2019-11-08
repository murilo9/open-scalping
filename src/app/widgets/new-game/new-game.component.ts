import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { GameService } from '../../shared/game.service';
import { NewGameForm } from 'src/app/core/NewGameForm';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent {


  //Este são os valores default inseridos no formulário de nova partida:
  form: NewGameForm = {
    playersQty: '30',
    initialPurchasePrice: '65370.00',
    initialSalePrice: '65370.50',
    tickSize: '0.5',
    minimumOfferSize: '1',
  };

  constructor(private gameService: GameService) { }

  newGame(){
    let playersQty = parseInt(this.form.playersQty);
    let tickSize = parseFloat(this.form.tickSize);
    let minimumOfferSize = parseFloat(this.form.minimumOfferSize);
    let initialSalePrice = parseFloat(this.form.initialSalePrice);
    let initialPurchasePrice = parseFloat(this.form.initialPurchasePrice);
    //Validação do formulário:
    if( playersQty > 30)
      this.form.playersQty = '30';
    if(isNaN(tickSize) || isNaN(playersQty) || isNaN(minimumOfferSize) ||
      isNaN(initialPurchasePrice) || isNaN(initialSalePrice)){
      alert('Preencha o fomrulário com valores numéricos.');
      return false;
    }
    if((initialSalePrice - initialPurchasePrice) === tickSize){
      this.gameService.callNewGame(this.form);
    }
    else{
      alert('A diferença entre os preços iniciais de compra e venda deve ser de 1 tick.');
    }
  }

  parseValues(){
    this.form.initialPurchasePrice = parseFloat(this.form.initialPurchasePrice).toFixed(2);
    this.form.initialSalePrice = parseFloat(this.form.initialSalePrice).toFixed(2);
  }

}
