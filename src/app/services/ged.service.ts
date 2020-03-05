import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {File as MyFile} from '../model/File';
import {AngularFireStorage} from '@angular/fire/storage';
import TaskEvent = firebase.storage.TaskEvent;
import TaskState = firebase.storage.TaskState;
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class GedService {
  uploadProgress: Subject<number> = new Subject<number>();
  constructor(private fireStorage: AngularFireStorage) { }
  public getFiles(): Observable<MyFile[]> {
    const files: MyFile[] = [];
    this.fireStorage.storage.ref().listAll().then((res) => {
      res.items.forEach((itemRef) => {
        itemRef.getDownloadURL().then((url) => {
          files.push({name: itemRef.name, url});
        });
      });
    });
    return of(files);
  }
  public uploadFile(file: File): void {
    this.uploadProgress.next(0);
    this.fireStorage.storage.ref(file.name).put(file).on(TaskEvent.STATE_CHANGED, (snapshot) => {
      this.uploadProgress.next((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    });
  }
}
