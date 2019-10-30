import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/core/game.service';
import { MarketService } from 'src/app/shared/market.service';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.scss']
})
export class BulletComponent implements OnInit {

  priceString: String;    //Quantidade em string
  quantityString: string;   //Preço em string, formatado com 2 casas decimais
  price: number = 0;    //Preço real, numérico
  quantity: number = 0;    //Quantidde real, numérico
  tick: number;   //Variação mínima de pontuação
  minimumOfferSize: number;

  constructor(private gameService: GameService, private marketService: MarketService) { 
    this.price = gameService.initialSalePrice;
    this.priceString = gameService.initialSalePrice.toFixed(2);
    this.quantity = gameService.minimumOfferSize;
    this.quantityString = gameService.minimumOfferSize.toString();
    this.tick = gameService.tickSize;
    this.minimumOfferSize = gameService.minimumOfferSize;
  }

  ngOnInit() {
  }

  parsePrice(event: any){
    let price = event.target.value;
    if(!isNaN(price)){
      this.price = parseFloat(price);    //Coloca o valor numérico no price
      this.priceString = this.price.toFixed(2);   //Coloca a string formatada no priceString
    }
  }

  parseQuantity(event: any){
    let quantity = event.target.value;
    if(!isNaN(quantity)){
      this.quantity = parseFloat(quantity);    //Coloca o valor numérico no price
      this.quantityString = this.quantity.toFixed(2);   //Coloca a string formatada no quantityString
    }
  }

  sell(){
    this.marketService.makeSaleOffer(0, this.price, this.quantity);
  }

  buy(){
    this.marketService.makePurchaseOffer(0, this.price, this.quantity);
  }

  priceIncrease(){
    this.price = this.price + this.tick;
    this.priceString = this.price.toFixed(2);
  }

  priceDecrease(){
    if(this.price > this.tick){
      this.price = this.price - this.tick;
      this.priceString = this.price.toFixed(2);
    }
  }

  quantityIncrease(){
    this.quantity = this.quantity + this.minimumOfferSize;
    this.quantityString = this.quantity.toString();
  }

  quantityDecrease(){
    if(this.quantity > this.minimumOfferSize){
      this.quantity = this.quantity - this.minimumOfferSize;
      this.quantityString = this.quantity.toString();
    }
  }

}
