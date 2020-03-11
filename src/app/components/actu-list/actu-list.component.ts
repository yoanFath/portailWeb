import { Component, OnInit } from '@angular/core';
import Actu from '../../model/Actu';
import {ActuService} from '../../services/actu.service';
import {ActuDetailComponent} from '../actu-detail/actu-detail.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'pwe-actu-list',
  templateUrl: './actu-list.component.html',
  styleUrls: ['./actu-list.component.scss']
})
export class ActuListComponent implements OnInit {
  public actus: Actu[];
  constructor(public dialog: MatDialog, private actuService: ActuService) {
    actuService.getActus().subscribe(actus => this.actus = actus);
  }
  ngOnInit() {
  }
  open(actu) {
      const actuInput = this.dialog.open(ActuDetailComponent, {
        width: '50%',
        data: {
          actu
        }
      });
  }
   sortActuByDate(actus: Actu[]): Actu[] {
    return actus.sort((a, b) => (a.date < b.date) ? 1 : -1);
  }
}
