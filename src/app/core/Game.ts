import { Market } from './Market';
import { Player } from './Player';
import { BotPlayer } from './BotPlayer';
import { MarketService } from '../shared/market.service';
import { NewGameForm } from './NewGameForm';

export class Game{
    public market: Market;
    public players: Array<Player> = [];
    private lastplayerId = 1;
    private botNames: Array<String> = [
        'XP', 'UBS', 'Clear', 'BTG', 'Rico', 'Turett', 'Itaú', 'Bradesco', 'Santander', 'XP', 'UBS'
    ]

    constructor(private marketService: MarketService, form: NewGameForm){
        this.market = new Market(marketService, form);
        this.players.push(new Player(this.lastplayerId, 'XP'));     //Usuário sempre será da XP
        //Insere os players:
        var playersQty = form.playersQty;
        for(var i = 0; i < playersQty; i++){
            this.lastplayerId++;
            var label = this.botNames[Math.floor(Math.random()*10)];
            this.players.push(new BotPlayer(this.lastplayerId, label));
        }
        //console.log(this.players);
    }
}