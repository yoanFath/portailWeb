import { Component, OnInit } from '@angular/core';
import Actu from '../../model/Actu';
import {ActuService} from '../../services/actu.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ActuDetailComponent} from '../actu-detail/actu-detail.component';
import {ActuInputComponent} from '../actu-input/actu-input.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'pwe-actu-list',
  templateUrl: './actu-list.component.html',
  styleUrls: ['./actu-list.component.scss']
})
export class ActuListComponent implements OnInit {
  public actus: Actu[];
  constructor(public dialog: MatDialog, private actuService: ActuService, private modalService: NgbModal) {
    actuService.getActus().subscribe(actus => this.actus = actus);
  }

  ngOnInit() {
  }

  open(actu) {
      const actuInput = this.dialog.open(ActuDetailComponent, {
        width: '50%',
        data: {
          actu: actu
        }
      });
  }
}
