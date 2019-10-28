import { MarketService } from '../shared/market.service';
import { GameService } from './game.service';

export class Player{

    id: number;
    label: string;
    human: boolean;

    constructor(id: number, label: string, marketService: MarketService){
        this.id = id;
        this.label = label;
        this.human = true;
    }
}