import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import Actu from '../model/Actu';

@Injectable({
  providedIn: 'root'
})
export class ActuService {
  constructor(private fireStore: AngularFirestore) { }

  public getActus(): Observable<Actu[]> {
    return this.fireStore.collection<Actu>('actus').valueChanges();
  }
  public newActu(actu: Actu): void {
    this.fireStore.collection<Actu>('actus').add(actu);
  }
}
