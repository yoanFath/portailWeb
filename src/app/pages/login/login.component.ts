import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import { Validators } from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'pwe-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  }, { validators: loginValidation });
  // private fb: FormBuilder()
  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) { }

  OnSubmit() {
    console.warn(this.loginForm.value);
    this.signIn(this.loginForm.value.email, this.loginForm.value.password );
  }

  ngOnInit() {
  }

  signIn(email, password) {
    this.authenticationService.SignIn(email, password);

  }

  signOut() {
    this.authenticationService.SignOut();
  }

}

export const loginValidation: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const email = control.get('email');
  const password = control.get('password');

  return email && password  ? { loginValidation: true } : null;
};
