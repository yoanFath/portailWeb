import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import User from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class RightService {
  constructor(private fireStore: AngularFirestore) {
  }

  public getRight(): Observable<string> {
    const userID = localStorage.getItem('userUID');
    const right = 'client';
    const userRef = this.fireStore.collection<User>('users').doc(userID).valueChanges();

    return userRef.pipe(map(doc => {
      const user = doc as User;
      if (user.droit) {
        return user.droit;
      }
    }));
  }

  public getUser(): Observable<User> {
    const userID = localStorage.getItem('userUID');
    const right = 'client';
    const userRef = this.fireStore.collection<User>('users').doc(userID).valueChanges();

    return userRef.pipe(map(doc => {
      console.log(doc );
      return doc as User;
    }));
  }
}
