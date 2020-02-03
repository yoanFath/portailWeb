import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ActuInputComponent} from '../../components/actu-input/actu-input.component';

@Component({
  selector: 'pwe-actu',
  templateUrl: './actu.component.html',
  styleUrls: ['./actu.component.scss']
})
export class ActuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  newActu(): void {
    const actuInput = this.dialog.open(ActuInputComponent, {
      width: '50%'
    });
  }
}
