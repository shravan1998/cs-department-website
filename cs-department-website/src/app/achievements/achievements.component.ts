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
  public details;
  year:String;
  competition:String;
  position:String;
  date:String;
  event:String;
  venue:String;
  level:String;
  constructor(private achievementservice:AchievementsService,
    private router:Router) {
    
   }

  ngOnInit() {
    this.achievementservice.getdata().subscribe((data)=>{
      
      this.details=data
    });
  }
  onSave(user){
    this.achievementservice.saveuser(user).subscribe((data)=>{
     this.ngOnInit();
    });
  }

  

}
