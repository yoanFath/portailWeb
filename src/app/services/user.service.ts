import { Injectable } from '@angular/core';
import User from '../model/User';
import {Observable, of} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireStore: AngularFirestore) { }
  public getUsers(): Observable<User[]> {
    return this.fireStore.collection<User>('users').valueChanges();
  }
}
