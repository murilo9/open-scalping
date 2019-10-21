import { Player } from './Player';

export class BotPlayer extends Player{

    private riskLevel: Number;

    constructor(id: Number, label: String){
        super(id, label);
        this.human = false;
    }
}