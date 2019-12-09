import { MarketService } from '../shared/market.service';
import { Player } from '../core/Player';

export abstract class AI{
  riskAcceptance: number;
  stage: string;
  player: Player;

  constructor(marketService: MarketService, player: Player){
    this.riskAcceptance = Math.floor(Math.random() * 3);
    this.player = player;
  }
}