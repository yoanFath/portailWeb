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
    let userID = localStorage.getItem('userUID');

    let userRef = this.fireStore.collection('users').doc(userID).ref;

    userRef.get().then(doc => {
      if (!doc.exists) {
        console.log('No such document! ' + userID);
        return false;
      } else {
        console.log('Document data:', doc.data());
        // test si le role est le bon
        return true;
      }
    })
      .catch(err => {
        console.log('Error getting document', err);
        return false;
      });

    return true;
  }
}
