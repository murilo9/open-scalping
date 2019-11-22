import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MarketService } from 'src/app/shared/market.service';
import { OfferType } from 'src/app/core/OfferType';

@Component({
  selector: 'app-volume-at-price',
  templateUrl: './volume-at-price.component.html',
  styleUrls: ['./volume-at-price.component.scss']
})
export class VolumeAtPriceComponent {

  subscription1: Subscription;
  subscription2: Subscription;
  volumesList: Array<{purchaseTotal: number, sellTotal: number, score: number}> = [];
  totalMax: number = 0;

  constructor(private marketService: MarketService) { 
    //Constrói a base da lista de negócios:
    this.volumesList.push({
      purchaseTotal: 0,
      sellTotal: 0,
      score: marketService.market.initialSalePrice
    })
    for (let i = 1; i < 30; i++) {    //Constrói o DOM de venda
      let score = marketService.market.initialSalePrice + 
      (i * marketService.market.tickSize);
      this.volumesList.push({
        purchaseTotal: 0,
        sellTotal: 0,
        score: score
      });
    }
    this.volumesList.unshift({
      purchaseTotal: 0,
      sellTotal: 0,
      score: marketService.market.initialPurchasePrice
    })
    for (let i = 1; i < 30; i++) {    //Constrói o DOM de compra
      let score = marketService.market.initialPurchasePrice - 
      (i * marketService.market.tickSize);
      this.volumesList.unshift({
        purchaseTotal: 0,
        sellTotal: 0,
        score: score
      });
    }
    //Toda vez que um negócio for fechado:
    marketService.dealMade$.subscribe((deal) => {
      let total = 0;
      //Procura a pontuação onde o negócio ocorreu:
      this.volumesList.forEach((volumeScore) => {
        //Se o negócio ocorreu nesta pontuação:
        if(volumeScore.score === deal.score){
          if(deal.type === OfferType.PURCHASE){
            volumeScore.purchaseTotal += deal.quantity;
          }
          else if(deal.type === OfferType.SALE){
            volumeScore.sellTotal += deal.quantity;
          }
        }
        //Also, verifica se este possui o maior total
        if(volumeScore.purchaseTotal + volumeScore.sellTotal > total){
          total = volumeScore.purchaseTotal + volumeScore.sellTotal;
        }
      })
      this.totalMax = total;    //Atualiza o novo total máximo
    })
  }

  getWidth(value){
    return Math.floor((value * 100) / this.totalMax);
  }
}
