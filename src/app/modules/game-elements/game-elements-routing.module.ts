import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalentComponent } from './pages/talent/talent.component';

const routes: Routes = [
  { path: 'talent', component: TalentComponent }, 
  { path: 'talent/:id', component: TalentComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameElementsRoutingModule { }
