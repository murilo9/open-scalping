export class Player{

    public id: Number;
    public label: String;
    public human: boolean;

    constructor(id: Number, label: String){
        this.id = id;
        this.label = label;
        this.human = true;
    }
}