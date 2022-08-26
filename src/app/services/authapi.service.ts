import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthapiService {
  constructor(private http: HttpClient) {
    this.saveUserData();
  }
  baseUrl:string = `https://routeegypt.herokuapp.com/`
  userData: BehaviorSubject<any> = new BehaviorSubject(null);
  sendSignUp(data: object): Observable<any> {
    return this.http.post(`${this.baseUrl}signup`, data);
  }
  sendLogIn(data: object): Observable<any> {
    return this.http.post(`${this.baseUrl}signin`, data);
  }
  saveUserData():void {
    const encodeToken = localStorage.getItem('userTokenMovie');
    if (encodeToken) {
      const decodenToken = jwtDecode(encodeToken);
      this.userData.next(decodenToken);
      console.log(this.userData.getValue());
      
    }
  }
}
