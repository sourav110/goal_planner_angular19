import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Login, Register } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = "https://api.freeprojectapi.com/api/GoalTracker/";
  http = inject(HttpClient);
  loggedUserData: any;

  constructor() {
    const localData = localStorage.getItem("goalAppUser");
    if(localData) {
      this.loggedUserData = JSON.parse(localData);
      //console.log(this.loggedUserData);
    }
  }

  login(obj: Login) {
    return this.http.post<any>(this.apiUrl + "login", obj);
  }

  register(obj: Register) {
    return this.http.post<any>(this.apiUrl + "register", obj);
  }

}
