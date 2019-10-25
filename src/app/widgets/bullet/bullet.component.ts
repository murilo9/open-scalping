import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/core/game.service';
import { MarketService } from 'src/app/shared/market.service';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.scss']
})
export class BulletComponent implements OnInit {

  price: any = 0;
  quantity: any = 0;

  constructor(private gameService: GameService, private marketService: MarketService) { 
    this.price = gameService.initialSalePrice.toFixed(2);
    this.quantity = gameService.minimumOfferSize;
  }

  ngOnInit() {
  }

  parsePrice(event: any){
    let price = event.target.value;
    if(!isNaN(price))
      this.price = parseFloat(event.target.value).toFixed(2);
  }

  sell(){
    this.marketService.makeSaleOffer(0, this.price, this.quantity);
  }

  buy(){
    this.marketService.makePurchaseOffer(0, this.price, this.quantity);
  }

}
