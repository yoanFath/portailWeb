import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import Actu from '../../model/Actu';
import {ActuService} from '../../services/actu.service';
import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

@Component({
  selector: 'pwe-actu-input',
  templateUrl: './actu-input.component.html',
  styleUrls: ['./actu-input.component.scss']
})
export class ActuInputComponent {
  public actu: Actu = {title: '', date: Timestamp.now(), content: ''};
  constructor(public dialogRef: MatDialogRef<ActuInputComponent>,
              public actuService: ActuService) { }

  addActu(): void {
    this.actuService.newActu(this.actu);
    this.dialogRef.close();
  }
}
