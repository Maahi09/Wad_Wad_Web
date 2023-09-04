import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
      private router: Router) { }
  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean | Promise<boolean> {
        const authToken:any = localStorage.getItem("authToken") || false;
        const isAuthenticated:any = authToken;
      if (!isAuthenticated) {
          this.router.navigate(['']);
      }
      return isAuthenticated;
  }
}