import { Component, OnInit } from '@angular/core';
import { AchievementsService} from '../achievements.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  name:String;
  usn:String;
  public details=[];
  constructor(private achievementservice:AchievementsService,
    private router:Router) {
    
   }

  ngOnInit() {
    
  }
  GetData(){
  
   
    
    this.achievementservice.getdata().subscribe(function(response){
      this.details=response;
    });
   
  }
  

}
