import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginNewUserComponent } from './login-new-user/login-new-user.component';
import { LoginNewRhComponent } from './login-new-rh/login-new-rh.component';
import { CandidatSpaceComponent} from './candidat-space/candidat-space.component';
import { RhSpaceComponent} from './rh-space/rh-space.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {LoginRhComponent} from './login-rh/login-rh.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
   { path: 'login-user', component: LoginUserComponent },
  { path: 'login-new-user', component: LoginNewUserComponent },
  { path: 'login-new-rh', component: LoginNewRhComponent },
  { path: 'candidat-space', component : CandidatSpaceComponent},
  { path: 'rh-space', component: RhSpaceComponent},
  {path: 'login-rh', component: LoginRhComponent},
  {path: '',
  redirectTo: '/home',
  pathMatch: 'full'}
];


@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : []
})
export class AppRoutingModule { }
