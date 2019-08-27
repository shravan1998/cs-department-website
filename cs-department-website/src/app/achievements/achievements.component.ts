import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  name:String;
  usn:String;
  constructor() { }

  ngOnInit() {
    var userControl = new FormControl('');
  }
  GetData(){
    console.log(this.name);
    console.log(this.usn);
  }

}
