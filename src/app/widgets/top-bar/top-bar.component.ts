import { Component, OnInit } from '@angular/core';
import { MarketService } from 'src/app/shared/market.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  clock: Date;
  running: any;
  paused: boolean;

  constructor(private marketService: MarketService) {
    this.clock = new Date();
    this.running = setInterval(() => {
      this.runClock();
    }, 1000)
    this.paused = false;
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

}
