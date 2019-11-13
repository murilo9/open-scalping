import { Player } from './Player';
import { BotPlayer } from './BotPlayer';
import { MarketService } from '../shared/market.service';
import { NewGameForm } from './NewGameForm';

export class Game{
    //market: Market;
    players: Array<Player> = [];
    lastplayerId = 1;
    botNames: Array<string> = [
        'XPI', 'UBS', 'Clear', 'BTG', 'Rico', 'Turett'
    ]

    constructor(private marketService: MarketService, form: NewGameForm){
        
        this.players.push(new Player(this.lastplayerId, 'XPI', marketService));     //Usuário sempre será da XP
        //Insere os players:
        var playersQty = parseInt(form.playersQty);
        for(var i = 0; i < playersQty; i++){
            this.lastplayerId++;
            var label = this.botNames[Math.floor(Math.random()*5)];
            this.players.push(new BotPlayer(this.lastplayerId, label, 
            this.marketService));
        }
        //Insere os big players:
        this.players.push(new BotPlayer(this.lastplayerId, 'Itaú', 
        marketService));
        this.players.push(new BotPlayer(this.lastplayerId, 'Bradesco',
        marketService));
        this.players.push(new BotPlayer(this.lastplayerId, 'Santander', 
        marketService));
        //Após terminar de construir a lista de players, registra ele no gameService:
        marketService.setPlayersList(this.players);
    }
}