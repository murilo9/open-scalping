import { MarketService } from '../shared/market.service';
import { Lot } from './Lot';
import { Subscription } from 'rxjs';
import { OfferType } from './OfferType';

export class Player{

    id: number;
    label: string;
    human: boolean;
    status: number;
    balance: number;
    average: number;
    purchasedLots: Array<Lot>;
    soldLots: Array<Lot>;
    subscription1: Subscription;
    marketService: MarketService;

    constructor(id: number, label: string, marketService: MarketService){
        this.id = id;
        this.label = label;
        this.human = true;
        this.status = 0;
        this.balance = 0;
        this.average = 0;
        this.purchasedLots = [];
        this.soldLots = [];
        this.marketService = marketService;
        //Toda vez que um negócio for fechado:
        this.subscription1 = marketService.dealMade$.subscribe((deal) => {
            //Verifica se o negócio envolveu este player:
            if(deal.activePlayerId === this.id){
                let price = marketService.lotPricePerScore*deal.score;
                for(let i = 0; i < deal.quantity; i++){
                    let lot = new Lot(deal.type, deal.score, price);
                    this.receiveLot(lot);
                }
            }
            else if(deal.passivePlayerId === this.id){
                let price = marketService.lotPricePerScore*deal.score;
                let type = deal.type === OfferType.SALE ? OfferType.PURCHASE : OfferType.SALE;
                for(let i = 0; i < deal.quantity; i++){
                    let lot = new Lot(type, deal.score, price);
                    this.receiveLot(lot);
                }
            }
        })
    }

    getCurrentStatus(){
        let sold = this.soldLots.length;
        let purchased = this.purchasedLots.length;
        return purchased - sold;
    }

    receiveLot(lot: Lot){
        if(lot.type === OfferType.PURCHASE){
            if(this.id === 0)
                console.log('player recebendo lote do tipo PURCHASE')
            this.purchasedLots.push(lot);    //Insere o lote na lista de lotes
            //Em caso de compra com o player vendido, atualiza o balanço:
            if (this.status < 0) {
                if (this.id === 0)
                    console.log('player estava vendido e comprou')
                let dealResultBalance = this.average - lot.score;   //Calcula o lucro/prejuízo
                //Aplica o lucro/prejuízo:
                this.balance += dealResultBalance * this.marketService.lotPricePerScore;      
            }
            this.status++;      //Aplica a posição
        }
        else if(lot.type === OfferType.SALE){
            if (this.id === 0)
                console.log('player recebendo lote do tipo SALE')
            this.soldLots.push(lot);    //Insere o lote na lista de lotes
            //Em caso de venda com o player comprado, atualiza o balanço:
            if (this.status > 0) {
                if (this.id === 0)
                    console.log('player estava comprado e vendeu')
                let dealResultBalance = lot.score - this.average;   //Calcula o lucro/prejuízo
                //Aplica o lucro/prejuízo:
                this.balance += dealResultBalance * this.marketService.lotPricePerScore;      
            }
            this.status--;      //Aplica a posição
        }
        //Atualiza a média:
        if(this.status > 0){    //Caso o player esteja comprado
            let sum = 0;
            this.purchasedLots.forEach((lot, l) => {
                sum += lot.score;
            })
            this.average = sum/this.purchasedLots.length;
        }
        else if(this.status < 0){       //Caso o player esteja vendido
            let sum = 0;
            this.soldLots.forEach((lot, l) => {
                sum += lot.score;
            })
            this.average = sum / this.soldLots.length;
            
        }
        else{       //Caso o player tenha sido zerado
            this.average = 0;
            if(lot.type === OfferType.PURCHASE){
                this.soldLots.splice(0, this.soldLots.length);
            }
            else if(lot.type === OfferType.SALE){
                this.purchasedLots.splice(0, this.soldLots.length);
            }
        }
    }
}