import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.userData = angularFireAuth.authState;
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .auth
      .signOut();
    localStorage.removeItem('userUID');
  }

}
