import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../login.service";
import { AuthService } from "src/app/core/services/auth/auth.service";
import { CommonService } from "src/app/shared/services/common.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent {
  public visible: boolean = true;
  public changeType: boolean = true;
  public submitted:boolean = false
  constructor(
    private router: Router,
    private loginService: LoginService,
    private authService: AuthService
  ) {
    // this.preloadImage();
  }
  form: NgForm | undefined;
  //method for submitting login data
  submitLoginData(loginData: any) {
    this.submitted = true
    if (loginData.valid) {
      const loginUserData = {
        email: loginData.value.username,
        password: loginData.value.password,
      };
      this.loginService.adduser(loginUserData).subscribe((res: any) => {
        const authToken: string = res.data;
        this.authService.storeToken(authToken);
        this.router.navigate(["/dashboard"]);
      });
      sessionStorage.setItem("loggedUser", loginData.value.username);
    }
  }
  showpassword() {
    this.visible = !this.visible;
    this.changeType = !this.changeType;
  }
  //preload image
  // preloadImage() {
  //   const img = new Image();
  //   img.src = "assets/images/loginPageImg.svg";
  //   img.onload = () => {
  //     console.log('Image preloaded!');
  //   };
  // }
}
