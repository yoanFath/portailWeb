import { Injectable } from '@angular/core';
import User from '../model/User';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  public getUsers(): Observable<User[]> {
    const users: User[] = [{firstName: 'Julien', lastName: 'Pignolet', email: 'julien.pignolet@hotmail.fr',
      role: 'Analyste développeur', team: 'Equipe Portail web entreprise',
      phone: '06.37.59.45.97', photo: 'https://material.angular.io/assets/img/examples/shiba1.jpg'},
      {firstName: 'Yoan', lastName: 'Fath', email: 'yoan.fath@laposte.net',
        role: 'Maître chauve', team: 'Equipe Menu',
        phone: '06.48.90.29.03', photo: 'https://material.angular.io/assets/img/examples/shiba1.jpg'},
      {firstName: 'Jordan', lastName: 'Sagnes', email: 'jordan.sagnes@gmail.com',
        role: 'Développeur CSS', team: 'Equipe 20/20 CSS',
        phone: '06.64.32.79.02', photo: 'https://material.angular.io/assets/img/examples/shiba1.jpg'},
      {firstName: 'Arnaud', lastName: 'Coudert', email: 'arnaud.coudert@gmaill.fr',
        role: 'Linux master', team: 'Equipe ls -l',
        phone: '06.79.65.32.19', photo: 'https://material.angular.io/assets/img/examples/shiba1.jpg'},
      {firstName: 'Gaetan', lastName: 'Bosco', email: 'bosco.gaetan@laposte.net',
        role: 'English teacher', team: 'Equipe english',
        phone: '06.65.46.95.98', photo: 'https://material.angular.io/assets/img/examples/shiba1.jpg'},
      {firstName: 'Arnaud', lastName: 'Scheffler', email: 'arnaud.scheffler@gmail.com',
        role: 'Maître fuyard', team: 'Equipe fuite',
        phone: '06.65.88.77.99', photo: 'https://material.angular.io/assets/img/examples/shiba1.jpg'},
      {firstName: 'Marsouin', lastName: 'Le grand marsouin', email: 'marsouin.marsouin@gsecu.com',
        role: 'Grand maitre kali linux respecté de tous', team: 'Equipe hacking',
        phone: '06.37.59.31.32', photo: 'https://material.angular.io/assets/img/examples/shiba1.jpg'},
      {firstName: 'Test', lastName: 'Débordement', email: 'test.debordement@gmail.com',
        role: 'Test', team: 'Débordement',
        phone: '06.00.00.07.99', photo: 'https://material.angular.io/assets/img/examples/shiba1.jpg'}];
    return of (users);
  }
}
