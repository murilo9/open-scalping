import { Market } from './Market';
import { Player } from './Player';
import { BotPlayer } from './BotPlayer';
import { MarketService } from '../shared/market.service';

export class Game{
    public market: Market;
    public players: Array<Player> = [];
    private lastplayerId = 1;
    private botNames: Array<String> = [
        'XP', 'UBS', 'Clear', 'BTG', 'Rico', 'Turett', 'Itaú', 'Bradesco', 'Santander', 'XP', 'UBS'
    ]

    constructor(private marketService: MarketService){
        this.market = new Market(marketService);
        this.players.push(new Player(this.lastplayerId, 'XP'));     //Usuário sempre será da XP
        var playersQty = Math.floor(10 + (Math.random() * 20));
        for(var i = 0; i < playersQty; i++){
            this.lastplayerId++;
            var label = this.botNames[Math.floor(Math.random()*10)];
            this.players.push(new BotPlayer(this.lastplayerId, label));
        }
        //console.log(this.players);
    }
}