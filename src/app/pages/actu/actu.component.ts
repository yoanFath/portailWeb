import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ActuInputComponent} from '../../components/actu-input/actu-input.component';
import {RightService} from '../../services/right.service';

@Component({
  selector: 'pwe-actu',
  templateUrl: './actu.component.html',
  styleUrls: ['./actu.component.scss']
})
export class ActuComponent implements OnInit {
  public droit: string;
  constructor(public dialog: MatDialog, public right: RightService) { }

  ngOnInit() {
    this.right.getRight().subscribe(droit => this.droit = droit);
  }

  newActu(): void {
    const actuInput = this.dialog.open(ActuInputComponent, {
      width: '50%'
    });
  }
}
