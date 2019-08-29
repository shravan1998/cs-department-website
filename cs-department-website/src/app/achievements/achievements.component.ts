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
    
    var name=this.name;
    var usn=this.usn;
    
    this.achievementservice.getdata(name,usn).subscribe(function(response){
      this.response=response as String;
    });
   
  }
  

}
