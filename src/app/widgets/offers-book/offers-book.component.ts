import { Component, OnInit } from '@angular/core';
import { MarketService } from 'src/app/shared/market.service';
import { Subscription, of } from 'rxjs';
import { OfferType } from 'src/app/shared/OfferType';
import { OfferScore } from 'src/app/core/Market';

@Component({
  selector: 'app-offers-book',
  templateUrl: './offers-book.component.html',
  styleUrls: ['./offers-book.component.scss']
})
export class OffersBookComponent {

  subscription1: Subscription;
  purchaseOffersList: Array<OfferScore>;   //Objeto onde a chave é o score e o valor é o objeto com dados do nível de preço
  saleOffersList: Array<OfferScore>;   //Objeto onde a chave é o score e o valor é o objeto com dados do nível de preço

  constructor(private marketService: MarketService) {
    this.purchaseOffersList = [];
    this.saleOffersList = [];
    this.subscription1 = marketService.offerListChanged$.subscribe((offersList) => {
      //Recebe o atributo offerList da classe Market e atribui ao purchaseOffersList ou saleOffersList:
      this.refreshOffers(offersList);
    })
  }

  refreshOffers(offersList: Object){    //offersList é um objeto onde cada chave é um score
    console.log(offersList)
    //Zera as listas, visto que elas serão reconstruídas:
    this.purchaseOffersList = [];
    this.saleOffersList = [];
    //Reconstrói as listas:
    for(var score in offersList){   //Para cada score na lista de ofertas por nível de preço...
      if(offersList[score].status === OfferType.PURCHASE){
        this.purchaseOffersList.push(offersList[score])
        console.log('purchase')
      }
      else if(offersList[score].status === OfferType.SALE){
        console.log('sale')
        this.saleOffersList.push(offersList[score])
      }
      else
        console.log('Erro, tipo de offer score não identificado: ' + offersList[score].status)
    }
    //Ordena as litas de ofertas:
  }

}
