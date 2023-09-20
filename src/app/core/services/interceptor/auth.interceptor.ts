import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  /** the message for toaster. */
  private message!: string;
  /** the Title of message for toaster. */
  private messageTitle!: string;
  constructor(private toaster: ToastrService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let baseUrl =
      "https://c7d4-2405-201-2014-30fe-84e0-15f6-cca4-cceb.ngrok-free.app/";
    if (environment.BASE_URL) {
      baseUrl = environment.BASE_URL;
    }
    // const token = this.authService.getToken();
    const token = localStorage.getItem("authToken");
    const url = `${baseUrl}api/`;
    request = request.clone({
      url: url + request.url,
      setHeaders: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    });

    return next.handle(request).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        switch (errorResponse.status) {
          case 400:
            this.message = errorResponse.error.error;
            break;
          case 401:
            this.message = "Invalid Credentials";
            break;
          case 403:
            this.message = "Unauthorized Access";
            this.messageTitle = "Error";
            this.router.navigate([""]);
            break;
          default:
            this.message = errorResponse.error
              ? errorResponse.error.message
              : "";
            break;
        }
        this.toaster.error(this.message, this.messageTitle);
        return throwError(this.message);
      })
    );
  }
}
