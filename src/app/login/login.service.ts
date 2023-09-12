import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthInterceptor } from '../core/services/interceptor/auth.interceptor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private httpClient:HttpClient) { }
//method to post login data
adduser(loginData:any){
  return this.httpClient.post(`Admin/Login`,loginData)
}

}
