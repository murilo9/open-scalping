import { AI } from './AI';
import { MarketService } from '../shared/market.service';
import { Player } from '../core/Player';
import { Subscription } from 'rxjs';
import { OfferType } from '../core/OfferType';

export class Barrier extends AI{

  barrierScore: number;     //Preço base da barreira
  barrierScoreLimit: number;    //Preço limite da barreira
  barrierType: OfferType;   //Tipo da barreira
  offerQuantity: number;    //Quantidade de lotes apregoados na barreira
  subscription1: Subscription;

  constructor(private marketService: MarketService, player: Player){
    super(marketService, player);

    this.subscription1 = marketService.dealMade$.subscribe((deal) => {
      if(this.barrierType === OfferType.PURCHASE){    //Caso a barreira seja na compra
        //Caso um lote tenha sido vendido num preço abaixo do limite da barreira de compra:
        if(deal.score < this.barrierScore){
          this.stage = 'finished';    //Fim da estratégia
        }
      }
      //Caso um lote tenha sido comprado num preço acima do limite da barreira de venda:
      else if(this.barrierType === OfferType.SALE){   //Caso a barreira seja na venda
        this.stage = 'finished';    //Fim da estratégia
      }
    });

    if(Math.random() > 0.5){    //Caso a barreira seja na compra
      this.barrierType = OfferType.PURCHASE;
      //Define o preço em que a barreira será formada: melhor preço - ((2 ~ 10) * tick)
      this.barrierScore = marketService.getBestPurchaseScore() - 
      ((Math.floor(Math.random() * 8) + 2) * marketService.tickSize);
      //Define a largura da oferta: (15 ~ 30) * minimum offer
      this.offerQuantity = (15 + Math.floor(Math.random() * 15)) * marketService.minimumOfferSize;
      //Apregoa de acordo com o nível de aceitação de risco:
      switch(this.riskAcceptance){
        case 0:
          //Apregoa só no valor da barreira:
          marketService.makePurchaseOffer(player.id, this.barrierScore, this.offerQuantity);
          break;
        case 1:
          //Apregoa no valor da barreira e um tick depois:
          marketService.makePurchaseOffer(player.id, this.barrierScore, this.offerQuantity);
          marketService.makePurchaseOffer(
            player.id, 
            this.barrierScore - marketService.tickSize, 
            this.offerQuantity
          );
          break;
        case 2:
          //Apregoa no valor da barreira, um tick depois e mais (3 ~ 5) ticks depois:
          marketService.makePurchaseOffer(player.id, this.barrierScore, this.offerQuantity);
          marketService.makePurchaseOffer(
            player.id, 
            this.barrierScore - marketService.tickSize, 
            this.offerQuantity
          );
          marketService.makePurchaseOffer(
            player.id,
            this.barrierScore - (marketService.tickSize) * (3 + Math.floor(Math.random() * 2)),
            this.offerQuantity
          );
          break;
        case 3:
          //Apregoa no valor da barreira, um tick depois, (3 ~ 5) ticks depois e mais 4 ticks depois:
          marketService.makePurchaseOffer(player.id, this.barrierScore, this.offerQuantity);
          marketService.makePurchaseOffer(
            player.id,
            this.barrierScore - marketService.tickSize,
            this.offerQuantity
          );
          let secondOfferScore = this.barrierScore - (marketService.tickSize) * 
          (3 + Math.floor(Math.random() * 2));
          marketService.makePurchaseOffer(
            player.id,
            secondOfferScore,
            this.offerQuantity
          );
          marketService.makePurchaseOffer(
            player.id,
            secondOfferScore - (marketService.tickSize * 4),
            this.offerQuantity
          );
          break;
      }
    }
    else{   //Caso a barreira seja na venda
      this.barrierType = OfferType.SALE;
      //Define o preço em que a barreira será formada: melhor preço + ((2 ~ 10) * tick)
      this.barrierScore = marketService.getBestSaleScore() + 
      ((Math.floor(Math.random() * 8) + 2) * marketService.tickSize);
      //Define a largura da oferta: (15 ~ 30) * minimum offer
      this.offerQuantity = (15 + Math.floor(Math.random() * 15)) * marketService.minimumOfferSize;
      //Apregoa de acordo com o nível de aceitação de risco:
      switch(this.riskAcceptance){
        case 0:
          //Apregoa só no valor da barreira:
          marketService.makeSaleOffer(player.id, this.barrierScore, this.offerQuantity);
          break;
        case 1:
          //Apregoa no valor da barreira e um tick depois:
          marketService.makeSaleOffer(player.id, this.barrierScore, this.offerQuantity);
          marketService.makeSaleOffer(
            player.id, 
            this.barrierScore + marketService.tickSize, 
            this.offerQuantity
          );
          break;
        case 2:
          //Apregoa no valor da barreira, um tick depois e mais (3 ~ 5) ticks depois:
          marketService.makeSaleOffer(player.id, this.barrierScore, this.offerQuantity);
          marketService.makeSaleOffer(
            player.id, 
            this.barrierScore + marketService.tickSize, 
            this.offerQuantity
          );
          marketService.makeSaleOffer(
            player.id,
            this.barrierScore + (marketService.tickSize) * (3 + Math.floor(Math.random() * 2)),
            this.offerQuantity
          );
          break;
        case 3:
          //Apregoa no valor da barreira, um tick depois, (3 ~ 5) ticks depois e mais 4 ticks depois:
          marketService.makeSaleOffer(player.id, this.barrierScore, this.offerQuantity);
          marketService.makeSaleOffer(
            player.id,
            this.barrierScore + marketService.tickSize,
            this.offerQuantity
          );
          let secondOfferScore = this.barrierScore + (marketService.tickSize) * 
          (3 + Math.floor(Math.random() * 2));
          marketService.makeSaleOffer(
            player.id,
            secondOfferScore,
            this.offerQuantity
          );
          marketService.makeSaleOffer(
            player.id,
            secondOfferScore + (marketService.tickSize * 4),
            this.offerQuantity
          );
          break;
      }
    }
    this.stage = 'touted';    //Estágio inicial: apregoado
  }
}