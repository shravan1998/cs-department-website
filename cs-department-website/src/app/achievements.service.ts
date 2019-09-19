import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient,HttpErrorResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
//import {IAchievements} from './achievements/achievements';
//import { Achchievements} from './achievements';
const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
@Injectable({
  providedIn: 'root',
  
})

export class AchievementsService {
  url='https://shrouded-shelf-61669.herokuapp.com/';
  constructor(private http:HttpClient) { }
  public getdata(){
   return this.http.get(`${this.url}`);
  }
  public saveuser(user){
    console.log(user);
    return this.http.post(`${this.url}`,user);
    
  } 
}
