import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewGameComponent } from './src/app/widgets/new-game/new-game.component';
import { GameViewComponent } from './src/app/widgets/game-view/game-view.component';

const routes: Routes = [
  { path: 'new-game', component: NewGameComponent },
  { path: 'play', component: GameViewComponent },
  { path: '', redirectTo: 'new-game', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
