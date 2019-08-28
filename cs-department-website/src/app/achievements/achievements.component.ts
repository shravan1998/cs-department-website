import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  name:String;
  usn:String;
  constructor() {
    var name=this.name;
    var usn = this.usn;
   }

  ngOnInit() {
    var userControl = new FormControl('');
  }
  GetData(name,usn){
    
  }
  

}
