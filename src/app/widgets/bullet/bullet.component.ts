import { Component } from '@angular/core';
import { MarketService } from 'src/app/shared/market.service';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.scss']
})
export class BulletComponent {

  playerId: string;
  priceString: string;    //Quantidade em string
  quantityString: string;   //Preço em string, formatado com 2 casas decimais
  price: number = 0;    //Preço real, numérico
  quantity: number = 0;    //Quantidde real, numérico
  tick: number;   //Variação mínima de pontuação
  minimumOfferSize: number;

  constructor(private marketService: MarketService) { 
    this.price = marketService.initialSalePrice;
    this.priceString = marketService.initialSalePrice.toFixed(2);
    this.quantity = marketService.minimumOfferSize;
    this.quantityString = marketService.minimumOfferSize.toString();
    this.tick = marketService.tickSize;
    this.minimumOfferSize = marketService.minimumOfferSize;
    this.playerId = '0';
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
    this.marketService.makeSaleOffer(parseInt(this.playerId), this.price, this.quantity);
  }

  buy(){
    this.marketService.makePurchaseOffer(parseInt(this.playerId), this.price, this.quantity);
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
