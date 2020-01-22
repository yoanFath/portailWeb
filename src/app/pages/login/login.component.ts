import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import { Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder) { }

  OnSubmit() {
    console.warn(this.loginForm.value);
  }

  ngOnInit() {
  }

}

export const loginValidation: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const email = control.get('email');
  const password = control.get('password');

  // TODO test du mdp email avec firebase
  return email && password && email.value !== password.value ? { loginValidation: true } : null;
};
