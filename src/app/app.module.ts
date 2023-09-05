import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/services/interceptor/auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor,
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }