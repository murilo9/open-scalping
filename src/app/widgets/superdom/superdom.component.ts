import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { OfferScore } from 'src/app/core/Market';
import { MarketService } from 'src/app/shared/market.service';

@Component({
  selector: 'app-superdom',
  templateUrl: './superdom.component.html',
  styleUrls: ['./superdom.component.scss']
})
export class SuperdomComponent {

  subscription1: Subscription;
  offersList: Array<OfferScore>;

  constructor(private marketService: MarketService) {
    this.offersList = [];
    this.subscription1 = this.marketService.offerListChanged$.subscribe((offersList) => {
      this.offersList = [];
      offersList.forEach((offerScore, os) => {
        this.offersList.push(offerScore);
      })
    })
  }

}
