import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AchievementsListComponent} from './achievements-list/achievements-list.component';
const routes: Routes = [
  {
    path:'achievements',
    component:AchievementsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchievementsRoutingModule { }
