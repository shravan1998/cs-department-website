import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient,HttpErrorResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
@Injectable({
  providedIn: 'root',
  
})

export class AchievementsService {
  url='http://localhost:4000/achievements';
  constructor(private http:HttpClient) { }
  getdata(user):Observable<any>{
    
    
   return this.http.post(`${this.url}`,user).pipe(map((response:Response)=>console.log(response.json())));
  }
  
  
}
