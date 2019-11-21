import { Component } from '@angular/core';
import { MarketService } from 'src/app/shared/market.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  clock: Date;
  running: any;
  paused: boolean;
  gameStarted: boolean = false;
  subsscription1: Subscription;

  constructor(private marketService: MarketService) {
    this.clock = new Date();
    this.running = setInterval(() => {
      this.runClock();
    }, 1000)
    this.paused = false;
    this.subsscription1 = this.marketService.NewGameCalled$.subscribe(() => {
      this.gameStarted = true;
    })
  }

  playPause(){
    this.paused = !this.paused;
    if(this.paused)
      clearInterval(this.running);
    else
      this.running = setInterval(() => {
        this.runClock();
      }, 1000);
      this.marketService.playPause(this.paused);  //Envia o evento pro game service
  }

  runClock(){
    this.clock.setSeconds(this.clock.getSeconds()+1);
    this.clock = new Date(this.clock.getTime());
    this.marketService.updateClock(this.clock);
  }

  getPlayerStatus(){
    let status = 'ZERADO';
    if(this.marketService.game){
      let playerStatus = this.marketService.game.players[0].status;
      if(playerStatus > 0)
        status = 'COMPRADO (' + playerStatus + ')';
      else if(playerStatus < 0)
        status = 'VENDIDO (' + playerStatus + ')';
    }
    return status;
  }

  getPlayerBalance(){
    let balance = 0;
    if(this.marketService.game){
      return this.marketService.game.players[0].balance;
    }
  }

  //Somente para fins de debug
  /*getPlayerAverage(){
    return this.marketService.game.players[0].average;
  }*/

}
