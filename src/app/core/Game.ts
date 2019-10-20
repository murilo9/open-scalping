import { Market } from './Market';
import { Player } from './Player';

export class Game{
    public market: Market;
    public players: Array<Player> = [];
    private playerNames: Array<String> = [
        'XP', 'UBS', 'Clear', 'BTG', 'Rico', 'Turett', 'Itaú', 'Bradesco', 'Santander'
    ]

    constructor(){
        this.market = new Market();
        this.playerNames.forEach((playerName, p) => {
            this.players.push(new Player(playerName));
        })
    }
}