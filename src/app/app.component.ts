import {Component, OnInit} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {Router} from '@angular/router';

@Component({
  selector: 'pwe-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'portailWeb';

  constructor(public afAuth: AngularFireAuth, private router: Router) {
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.router.navigate(['/dashboard']);
        localStorage.setItem('userUID', user.uid);
        console.log(user.uid);
        // go to home page
      } else {
        // go to login page
        this.router.navigate(['/login']);
        // console.log('GO TO LOGIN');
      }
    });
  }

}
