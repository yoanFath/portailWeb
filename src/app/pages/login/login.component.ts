import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import { Validators } from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'pwe-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mdpIncorrect = null;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  }, );
  // private fb: FormBuilder()
  constructor(private angularFireAuth: AngularFireAuth, private fb: FormBuilder, private router: Router) { }

  OnSubmit() {
    console.warn(this.loginForm.value);
    this.signIn(this.loginForm.value.email, this.loginForm.value.password );
  }

  ngOnInit() {
  }

  get email() {
    return this.loginForm.get('email');
  }

  signIn(email, password) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('You are Successfully logged in!');
        this.mdpIncorrect = null;
        this.router.navigate(['/dashboard']);
      })
      .catch(err => {
        this.mdpIncorrect = 'incorrect';
        console.log('Something is wrong:', err.message);
        this.router.navigate(['/login']);
      });
  }

}




