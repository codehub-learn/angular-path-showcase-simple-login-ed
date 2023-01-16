import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private credentials = {
    username: "codehub",
    password: "1234"
  }

  constructor() { }

  login(loginCredentials: any): Observable<boolean> {
    if(loginCredentials.username === this.credentials.username
      && loginCredentials.password === this.credentials.password){
      localStorage.setItem("authenticated", "true");
      return of(true);
    }
    return of(false);
  }

  logout(){
    localStorage.removeItem("authenticated");
  }

  isAuthenticated(): boolean {
    let isAuthenticated = localStorage.getItem("authenticated");
    if(isAuthenticated !== null && isAuthenticated === "true"){
      return true;
    }
    return false;
  }
}
