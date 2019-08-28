import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { EventsComponent } from './events/events.component';
import { FacultyComponent } from './faculty/faculty.component';
import {HttpClientModule} from '@angular/common/http';
import {AchievementsService} from './achievements.service';


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
    FormsModule,
    HttpClientModule

  ],
  providers: [AchievementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
