import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameViewComponent } from './game-view/game-view.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NewGameComponent } from './new-game/new-game.component';
import { DealHistoryComponent } from './deal-history/deal-history.component';
import { FormsModule } from '@angular/forms';
import { BulletComponent } from './bullet/bullet.component';
import { OffersBookComponent } from './offers-book/offers-book.component';
import { SuperdomComponent } from './superdom/superdom.component';
import { PersonalHistoryComponent } from './personal-history/personal-history.component';
import { VolumeAtPriceComponent } from './volume-at-price/volume-at-price.component';



@NgModule({
  declarations: [GameViewComponent, TopBarComponent, NewGameComponent, DealHistoryComponent, BulletComponent, OffersBookComponent, SuperdomComponent, PersonalHistoryComponent, VolumeAtPriceComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TopBarComponent,
    NewGameComponent,
    GameViewComponent
  ]
})
export class WidgetsModule { }
