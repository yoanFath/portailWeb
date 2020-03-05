import {Component, Inject, Input, OnInit} from '@angular/core';
import {ActuInputComponent} from '../actu-input/actu-input.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import Actu from '../../model/Actu';

@Component({
  selector: 'pwe-actu-detail',
  templateUrl: './actu-detail.component.html',
  styleUrls: ['./actu-detail.component.scss']
})
export class ActuDetailComponent  {
  constructor(@Inject(MAT_DIALOG_DATA) public actu: Actu, public dialogRef: MatDialogRef<ActuInputComponent>) {
  }

}
