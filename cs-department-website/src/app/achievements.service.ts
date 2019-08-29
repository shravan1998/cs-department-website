import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient,HttpErrorResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';
const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
@Injectable({
  providedIn: 'root',
  
})

export class AchievementsService {
  url='http://localhost:8000/achievements';
  constructor(private http:HttpClient) { }
  getdata(user){
    
    
   return this.http.post(`${this.url}/api`,user).pipe(map((response:Response)=>console.log(response.json())));
  }
  
  
}
