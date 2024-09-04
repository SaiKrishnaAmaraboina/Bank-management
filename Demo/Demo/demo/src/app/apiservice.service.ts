import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
 
@Injectable({
  providedIn: 'root'
})
export class ApiservService {
 
  constructor(private http:HttpClient){}
  getallaccounts(){
    return this.http.get("http://localhost:8080/account/getallaccounts");
  }
}