import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  //method to store authentication token
  storeToken(token:string){
    localStorage.setItem('authToken',token);
  }
   //method to get authentication token
   getToken(){
    localStorage.getItem('authToken');
   }
   //method to remove authentication token
   removeToken(){
    localStorage.removeItem('authToken');
   }
}
