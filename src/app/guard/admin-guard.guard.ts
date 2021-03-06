import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  constructor(public afAuth: AngularFireAuth, private router: Router, private fireStore: AngularFirestore) {
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userID = localStorage.getItem('userUID');
    let hasRight = false;
    const userRef = this.fireStore.collection('users').doc(userID).ref;

    userRef.get().then(doc => {
      if (!doc.exists) {
        console.log('No such document! ' + userID);
        hasRight =  false;
      } else {
        console.log('Document data:', doc.data().droit);
        console.log(doc.data().droit === 'admin');

        // test si le role est le bon
        hasRight = doc.data().droit === 'admin';
      }
    })
      .catch(err => {
        console.log('Error getting document', err);
        hasRight = false;
      });
    return hasRight;
  }
}
