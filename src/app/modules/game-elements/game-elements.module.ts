import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameElementsRoutingModule } from './game-elements-routing.module';
import { TalentComponent } from './pages/talent/talent.component';


@NgModule({
  declarations: [
    TalentComponent
  ],
  imports: [
    CommonModule,
    GameElementsRoutingModule
  ]
})
export class GameElementsModule { }
