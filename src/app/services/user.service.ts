import { Injectable } from '@angular/core';
import User from '../model/User';
import {Observable, of} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import set = Reflect.set;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireStore: AngularFirestore) {
  }

  public getUsers(): Observable<User[]> {
    return this.fireStore.collection<User>('users').valueChanges();
  }

  public editUser(user: User): void {
    this.fireStore.firestore
      .collection('users')
      .where('email', '==', user.email)
      .get()
      .then(snapchot => {
        snapchot.forEach(doc => {
          this.fireStore.firestore.collection('users').doc(doc.id).set(user);
          });
      });
  }
}
