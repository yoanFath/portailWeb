import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import File from '../model/File';

@Injectable({
  providedIn: 'root'
})
export class GedService {

  constructor() { }
  public getFiles(): Observable<File[]> {
    const files: File[] = [{name: 'Mon beau fichier', date: '21/11/1997', description: 'test'}];
    return of(files);
  }
}
