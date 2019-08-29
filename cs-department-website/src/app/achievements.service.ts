import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient,HttpErrorResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {IAchievements} from './achievements/achievements';
//import { Achchievements} from './achievements';
const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
@Injectable({
  providedIn: 'root',
  
})

export class AchievementsService {
  url='http://localhost:8000/achievements';
  constructor(private http:HttpClient) { }
  public getdata(name,usn):Observable<IAchievements[]>{
    
    
   return this.http.get<IAchievements[]>(`${this.url}/api?name=${name}&usn=${usn}`);
  }
  
  
}
