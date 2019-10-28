export class Player{

    public id: number;
    public label: string;
    public human: boolean;

    constructor(id: number, label: string){
        this.id = id;
        this.label = label;
        this.human = true;
    }
}