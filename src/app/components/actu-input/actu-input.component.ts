import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import Actu from '../../model/Actu';
import {ActuService} from '../../services/actu.service';

@Component({
  selector: 'pwe-actu-input',
  templateUrl: './actu-input.component.html',
  styleUrls: ['./actu-input.component.scss']
})
export class ActuInputComponent {
  public actu: Actu = {title: '', date: new Date().toLocaleDateString(), content: ''};
  constructor(public dialogRef: MatDialogRef<ActuInputComponent>,
              public actuService: ActuService) { }

  addActu(): void {
    this.actuService.newActu(this.actu);
    this.dialogRef.close();
  }
}
