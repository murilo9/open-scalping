import { Player } from './Player';
import { BotPlayer } from './BotPlayer';
import { MarketService } from '../shared/market.service';
import { NewGameForm } from './NewGameForm';

export class Game{
    players: Array<Player> = [];
    lastplayerId = 0;
    botNames: Array<string> = [
        'XPI', 'UBS', 'Clear', 'BTG', 'Rico', 'Turett'
    ]

    constructor(private marketService: MarketService, form: NewGameForm){
        //Usuário sempre será da XP:
        this.players.push(new Player(this.lastplayerId, 'XPI', marketService));     
        //Insere os players:
        var playersQty = parseInt(form.playersQty);
        for(var i = 0; i < playersQty; i++){
            this.lastplayerId++;
            var label = this.botNames[Math.floor(Math.random()*5)];
            let bot = new BotPlayer(this.lastplayerId, label, this.marketService);
            this.players.push(bot);
        }
        //Insere os big players:
        /*this.lastplayerId++;
        this.players.push(new BotPlayer(this.lastplayerId, 'Itaú', 
        marketService));
        this.lastplayerId++;
        this.players.push(new BotPlayer(this.lastplayerId, 'Bradesco',
        marketService));
        this.lastplayerId++;
        this.players.push(new BotPlayer(this.lastplayerId, 'Santander', 
        marketService));*/
        //Após terminar de construir a lista de players, registra ele no gameService:
        marketService.setPlayersList(this.players);
    }
}