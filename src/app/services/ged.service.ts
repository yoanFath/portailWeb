import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import File from '../model/File';
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class GedService {

  constructor(private fireStorage: AngularFireStorage) { }
  public getFiles(): Observable<File[]> {
    const files: File[] = [];
    this.fireStorage.storage.ref().listAll().then((res) => {
      res.items.forEach((itemRef) => {
        itemRef.getDownloadURL().then((url) => {
          files.push({name: itemRef.name, url: url});
        });
      });
    });
    return of(files);
  }
}
