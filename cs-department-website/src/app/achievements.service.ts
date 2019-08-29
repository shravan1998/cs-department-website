import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient,HttpErrorResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
//import { Achchievements} from './achievements';
const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
@Injectable({
  providedIn: 'root',
  
})

export class AchievementsService {
  url='http://localhost:8000/achievements';
  constructor(private http:HttpClient) { }
  public getdata(name,usn):Observable<any>{
    
    
   return this.http.get<any>(`${this.url}/api/?name=${this.name}&${this.usn}`);
  }
  
  
}
