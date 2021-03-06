import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { MarketService } from '../../shared/market.service';
import { Deal } from 'src/app/core/Deal';

@Component({
  selector: 'app-deal-history',
  templateUrl: './deal-history.component.html',
  styleUrls: ['./deal-history.component.scss'],
})
export class DealHistoryComponent {

  subscription1: Subscription;
  dealList: Array<Deal> = [];

  constructor(private marketService: MarketService) {
    //Quando ocorrer um negócio fechado:
    this.subscription1 = marketService.dealListChanged$.subscribe((dealList) => {
      this.dealList = dealList;   //Atualiza o histórico de negócios neste component
    })
  }

  getPlayerLabel(id){
    return this.marketService.getPlayerLabel(id);
  }

}
