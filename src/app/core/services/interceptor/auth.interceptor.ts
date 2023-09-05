import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let baseUrl = 'https://c7d4-2405-201-2014-30fe-84e0-15f6-cca4-cceb.ngrok-free.app/';
    if (environment.BASE_URL) {
      baseUrl = environment.BASE_URL;
    }
    // const token = this.authService.getToken();
    const token = localStorage.getItem('authToken');
    const url = `${baseUrl}api/`;
    request = request.clone({
      url: url + request.url,
        setHeaders: {
            Authorization: `${token}`,
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "true" 
        },
    });
    
    return next.handle(request);
  }
}
