import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameViewComponent } from './game-view/game-view.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NewGameComponent } from './new-game/new-game.component';
import { DealHistoryComponent } from './deal-history/deal-history.component';



@NgModule({
  declarations: [GameViewComponent, TopBarComponent, NewGameComponent, DealHistoryComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TopBarComponent,
    NewGameComponent,
    GameViewComponent
  ]
})
export class WidgetsModule { }
