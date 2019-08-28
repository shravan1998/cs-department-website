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
  constructor(private achievementservice:AchievementsService,
    private router:Router) {
    
   }

  ngOnInit() {
    
  }
  GetData(){
    const user={
      name:this.name,
      usn:this.usn
    }
    this.achievementservice.getdata(user).subscribe((response)=>{
      console.log(response);
    });
   
  }
  

}
