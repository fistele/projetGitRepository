import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {SignUpInfo} from '../auth/signup-info';

@Component({
  selector: 'app-login-new-user',
  templateUrl: './login-new-user.component.html',
  styleUrls: ['./login-new-user.component.css']
})
export class LoginNewUserComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.first_name,
      this.form.last_name,
      this.form.email,
      this.form.password);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}

