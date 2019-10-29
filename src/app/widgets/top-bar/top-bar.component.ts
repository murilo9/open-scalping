import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  clock: Date;

  constructor() {
    this.clock = new Date();
    setInterval(() => {
      this.clock = new Date();
    }, 1000)
  }

}
