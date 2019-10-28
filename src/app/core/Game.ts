import { Market } from './Market';
import { Player } from './Player';
import { BotPlayer } from './BotPlayer';
import { MarketService } from '../shared/market.service';
import { NewGameForm } from './NewGameForm';
import { GameService } from './game.service';

export class Game{
    market: Market;
    players: Array<Player> = [];
    lastplayerId = 1;
    botNames: Array<string> = [
        'XPI', 'UBS', 'Clear', 'BTG', 'Rico', 'Turett'
    ]

    constructor(private marketService: MarketService, private gameService: GameService, form: NewGameForm){
        this.market = new Market(marketService, form);
        this.players.push(new Player(this.lastplayerId, 'XPI', marketService));     //Usuário sempre será da XP
        //Insere os players:
        var playersQty = form.playersQty;
        for(var i = 0; i < playersQty; i++){
            this.lastplayerId++;
            var label = this.botNames[Math.floor(Math.random()*5)];
            this.players.push(new BotPlayer(this.lastplayerId, label, this.marketService, this.gameService));
        }
        //Insere os big players:
        this.players.push(new BotPlayer(this.lastplayerId, 'Itaú', marketService, gameService));
        this.players.push(new BotPlayer(this.lastplayerId, 'Bradesco', marketService, gameService));
        this.players.push(new BotPlayer(this.lastplayerId, 'Santander', marketService, gameService));
        //Após terminar de construir a lista de players, registra ele no gameService:
        gameService.setPlayersList(this.players);
    }
}