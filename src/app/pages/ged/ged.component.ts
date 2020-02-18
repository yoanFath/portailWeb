import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {GedInputComponent} from '../../components/ged-input/ged-input.component';

@Component({
  selector: 'pwe-ged',
  templateUrl: './ged.component.html',
  styleUrls: ['./ged.component.scss']
})
export class GedComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  fileUpload() {
    const gedInput = this.dialog.open(GedInputComponent, {
      width: '20%'
    });
  }
}
