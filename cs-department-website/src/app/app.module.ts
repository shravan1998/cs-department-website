import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { EventsComponent } from './events/events.component';
import { FacultyComponent } from './faculty/faculty.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AchievementsComponent,
    EventsComponent,
    FacultyComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
