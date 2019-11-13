import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Game } from './core/Game';
import { MarketService } from './shared/market.service';
import { Subscription } from 'rxjs';
import { NewGameForm } from './core/NewGameForm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MarketService]
})
export class AppComponent {
  
  title = 'open-scalping';
  subscription1: Subscription;

  constructor(private marketService: MarketService, private router: Router){
    this.subscription1 = marketService.NewGameCalled$.subscribe(() => {
      this.onNewGame();
    })
  }

  onNewGame(){
    this.router.navigateByUrl('/play');
  }
}
