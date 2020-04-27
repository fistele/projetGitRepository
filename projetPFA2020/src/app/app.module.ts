import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginNewUserComponent } from './login-new-user/login-new-user.component';
import { LoginNewRhComponent } from './login-new-rh/login-new-rh.component';
import { CandidatSpaceComponent } from './candidat-space/candidat-space.component';
import { RhSpaceComponent } from './rh-space/rh-space.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginRhComponent } from './login-rh/login-rh.component';
import {AuthInterceptor} from './auth/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
     LoginUserComponent,
    LoginNewUserComponent,
    LoginNewRhComponent,
    CandidatSpaceComponent,
    RhSpaceComponent,
    LoginRhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
