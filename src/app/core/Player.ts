import { MarketService } from '../shared/market.service';
import { Lot } from './Lot';
import { Subscription } from 'rxjs';
import { OfferType } from './OfferType';

export class Player{

    id: number;
    label: string;
    human: boolean;
    lots: Array<Lot>;
    subscription1: Subscription;
    marketService: MarketService;

    constructor(id: number, label: string, marketService: MarketService){
        this.id = id;
        this.label = label;
        this.human = true;
        this.lots = [];
        this.marketService = marketService;
        //Toda vez que um negócio for fechado:
        this.subscription1 = marketService.dealMade$.subscribe((deal) => {
            //Verifica se o negócio envolveu este player:
            if(deal.activePlayerId === this.id){
                let price = marketService.lotPricePerScore*deal.score;
                for(let i = 0; i < deal.quantity; i++){
                    let lot = new Lot(deal.type, deal.score, price);
                    this.lots.push(lot);
                }
            }
            else if(deal.passivePlayerId === this.id){
                let price = marketService.lotPricePerScore*deal.score;
                let type = deal.type === OfferType.SALE ? OfferType.PURCHASE : OfferType.SALE;
                for(let i = 0; i < deal.quantity; i++){
                    let lot = new Lot(type, deal.score, price);
                    this.lots.push(lot);
                }
            }
        })
    }

    /**
     * Retorna o balanço atual do player
     */
    getCurrentBalance(){
        let lotsBalance = 0;
        let bestPurchaseScore = this.marketService.getBestPurchaseScore();
        let bestSaleScore = this.marketService.getBestSaleScore();
        let lotPricePerScore = this.marketService.lotPricePerScore;
        this.lots.forEach((lot, l) => {
            let lotValue = 0;
            if(lot.type === OfferType.PURCHASE){
                //Valor do lote comprado = melhor preço de compra - preço da compra
                lotValue = (bestPurchaseScore - lot.score) * lotPricePerScore;
            }
            else if(lot.type === OfferType.SALE){
                //Valor do lote vendido = preço de venda - melhor preço de venda
                lotValue = (lot.score - bestSaleScore) * lotPricePerScore;
            }
            lotsBalance += lotValue;
        })
        return lotsBalance;
    }

    /**
     * Retorna a situação atual do player
     * Positivo: comprado
     * Zero: zerado
     * Negativo: vendido
     */
    getCurrentStatus(){
        let purchased = 0;
        let sold = 0;
        this.lots.forEach((lot, l) => {
            if(lot.type === OfferType.PURCHASE)
                purchased++;
            else if(lot.type === OfferType.SALE)
                sold++;
        })
        return purchased - sold;
    }
}