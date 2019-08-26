import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AchievementsComponent } from './achievements/achievements.component';
import {EventsComponent} from './events/events.component';
import {FacultyComponent} from './faculty/faculty.component';


const routes: Routes = [{
  path:'',component:HomeComponent
},{
  path:'achievements',component:AchievementsComponent
},{
  path:'events',component:EventsComponent
},{
  path:'faculty',component:FacultyComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
