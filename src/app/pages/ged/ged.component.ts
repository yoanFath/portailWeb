import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {GedInputComponent} from '../../components/ged-input/ged-input.component';
import {RightService} from '../../services/right.service';
import User from '../../model/User';
import {Observable} from 'rxjs';

@Component({
  selector: 'pwe-ged',
  templateUrl: './ged.component.html',
  styleUrls: ['./ged.component.scss']
})
export class GedComponent implements OnInit {
  public droit: string;
  constructor(public dialog: MatDialog, public right: RightService) { }

  ngOnInit() {
   this.right.getRight().subscribe(droit => this.droit = droit);
  }
  fileUpload() {
    const gedInput = this.dialog.open(GedInputComponent, {
      width: '20%'
    });
  }
}
