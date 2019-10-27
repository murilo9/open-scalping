import { Component } from '@angular/core';
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
    //Zera as listas, visto que elas serão reconstruídas:
    this.purchaseOffersList = [];
    this.saleOffersList = [];
    //Reconstrói as listas:
    for(var score in offersList){   //Para cada score na lista de ofertas por nível de pontuação...
      //Se a oferta a ser inserida for de compra:
      if(offersList[score].status === OfferType.PURCHASE){
        this.purchaseOffersList.push(offersList[score]);
      }
      //Se a oferta a ser inserida for de venda:
      else if(offersList[score].status === OfferType.SALE){
        this.saleOffersList.push(offersList[score]);
      }
      else
        console.log('Erro, tipo de offer score não identificado: ' + offersList[score].status)
    }
    //Ordena as litas de ofertas:
    this.sortOffers();
  }

  sortOffers(){
    //Ordena a lista de ofertas de compra:
    let sortedPurchases = [];
    let count = this.purchaseOffersList.length;
    for(let i = 0; i < count; i++){
      let maxScore = 0;
      let index = -1;
      this.purchaseOffersList.forEach((offerScore, os) => {
        if(parseFloat(offerScore.score) > maxScore){
          maxScore = parseFloat(offerScore.score);
          index = os;
        }
      })
      sortedPurchases.push(this.purchaseOffersList[index]);
      this.purchaseOffersList.splice(index, 1);
    }
    sortedPurchases.forEach((sortedOffer, so) => {
      this.purchaseOffersList.push(sortedOffer);
    })

    //Ordena a lista de ofertas de venda:
    sortedPurchases = [];
    count = this.saleOffersList.length;
    for(let i = 0; i < count; i++){
      let maxScore = 0;
      let index = -1;
      this.saleOffersList.forEach((offerScore, os) => {
        if(parseFloat(offerScore.score) > maxScore){
          maxScore = parseFloat(offerScore.score);
          index = os;
        }
      })
      sortedPurchases.push(this.saleOffersList[index]);
      this.saleOffersList.splice(index, 1);
    }
    sortedPurchases.forEach((sortedOffer, so) => {
      this.saleOffersList.push(sortedOffer);
    })
    this.saleOffersList.reverse();
  }
}
