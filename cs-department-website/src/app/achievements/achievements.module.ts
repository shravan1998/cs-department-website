import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AchievementsRoutingModule } from './achievements-routing.module';
import { AchievementsListComponent } from './achievements-list/achievements-list.component';


@NgModule({
  declarations: [AchievementsListComponent],
  imports: [
    CommonModule,
    AchievementsRoutingModule
  ]
})
export class AchievementsModule { }
