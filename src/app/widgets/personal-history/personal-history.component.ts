import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MarketService } from 'src/app/shared/market.service';
import { OfferType } from 'src/app/core/OfferType';

@Component({
  selector: 'app-personal-history',
  templateUrl: './personal-history.component.html',
  styleUrls: ['./personal-history.component.scss']
})
export class PersonalHistoryComponent{

  playerOfferList: Array<{
    id: number,
    quantity: number, 
    initialQuantity: number, 
    score: number, 
    type: OfferType, 
    status: string,
    time: Date
  }> = [];
  subscription1: Subscription;
  subscription2: Subscription;
  marketService: MarketService;
  
  constructor(marketService: MarketService) { 
    this.marketService = marketService;
    //Caso o jogador tenha enviado uma oferta:
    this.subscription1 = marketService.playerMadeOffer$.subscribe((offer) => {
      this.playerOfferList.push({
        id: offer.offer.id,
        quantity: offer.offer.quantity,
        initialQuantity: offer.offer.quantity,
        score: offer.offer.score,
        type: offer.offer.type,
        status: offer.preResult,
        time: new Date()
      })
    })
    //Caso alguém tenha batido a oferta do jogador:
    this.subscription2 = marketService.dealMade$.subscribe((deal) => {
      if(deal.passivePlayerId === 0){
        if(deal.type === OfferType.PURCHASE){
          let stop = false;
          let i = 0;
          while(!stop && i < this.playerOfferList.length){
            if(this.playerOfferList[i].type === OfferType.SALE){
              if (this.playerOfferList[i].status === 'teased' || 
              this.playerOfferList[i].status === 'parcial'){
                let offerResultQuantity = this.playerOfferList[i].quantity - deal.quantity;
                if(offerResultQuantity > 0){    //Em caso da oferta não ter sido finalziada
                  this.playerOfferList[i].status = 'parcial';   //A oferta continua como parcial
                  this.playerOfferList[i].quantity -= deal.quantity;  //Atualiza a quantidade
                  stop = true;
                }
                else if(offerResultQuantity === 0){   //Caso a oferta tenha sido finalizada
                  this.playerOfferList[i].status = 'completed';   //A oferta continua como parcial
                  this.playerOfferList[i].quantity = 0;  //Atualiza a quantidade
                  stop = true;
                }
                else{   //Caso a oferta tenha sido finalizada e ainda tiver outra após esta
                  this.playerOfferList[i].status = 'completed';   //A oferta continua como parcial
                  this.playerOfferList[i].quantity = 0;  //Atualiza a quantidade
                  //Aqui não ativa o stop, pois ainda há negócios fechados na próxima oferta
                }
              }
            }
            i++;
          }
        }
        else if(deal.type === OfferType.SALE){
          let stop = false;
          let i = 0;
          while (!stop && i < this.playerOfferList.length) {
            if (this.playerOfferList[i].type === OfferType.PURCHASE) {
              if (this.playerOfferList[i].status === 'teased' || 
              this.playerOfferList[i].status === 'parcial') {
                let offerResultQuantity = this.playerOfferList[i].quantity - deal.quantity;
                if (offerResultQuantity > 0) {    //Em caso da oferta não ter sido finalziada
                  this.playerOfferList[i].status = 'parcial';   //A oferta continua como parcial
                  this.playerOfferList[i].quantity -= deal.quantity;  //Atualiza a quantidade
                  stop = true;
                }
                else if (offerResultQuantity === 0) {   //Caso a oferta tenha sido finalizada
                  this.playerOfferList[i].status = 'completed';   //A oferta continua como parcial
                  this.playerOfferList[i].quantity = 0;  //Atualiza a quantidade
                  stop = true;
                }
                else {   //Caso a oferta tenha sido finalizada e ainda tiver outra após esta
                  this.playerOfferList[i].status = 'completed';   //A oferta continua como parcial
                  this.playerOfferList[i].quantity = 0;  //Atualiza a quantidade
                  //Aqui não ativa o stop, pois ainda há negócios fechados na próxima oferta
                }
              }
            }
            i++;
          }
        }
      }
    })
  }

  getOfferStatusLabel(status: string){
    let label = 'null';
    switch(status){
      case 'teased':
        label = 'Apregoada';
        break;
      case 'parcial':
        label = 'Parcial';
        break;
      case 'completed':
        label = 'Finalizada';
        break;
    }
    return label;
  }

  cancelOffer(id, score){
    let offerQuantity = this.marketService.cancelOffer(id, score);
    this.playerOfferList.forEach((offer, os) => {
      if(offer.id === id){
        //Se a oferta estiver apenas apregoada, elimina:
        if(offer.status === 'teased'){
          this.playerOfferList.splice(os, 1);
        }
        //Caso a oferta tenha sido realizada parcialmente, completa:
        else if(offer.status === 'parcial'){
          offer.initialQuantity = offer.initialQuantity - offerQuantity;
          offer.status = 'completed';
        }
      }
    })
  }

}
