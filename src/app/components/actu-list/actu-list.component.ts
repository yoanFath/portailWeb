import { Component, OnInit } from '@angular/core';
import Actu from '../../model/Actu';
import {ActuService} from '../../services/actu.service';

@Component({
  selector: 'pwe-actu-list',
  templateUrl: './actu-list.component.html',
  styleUrls: ['./actu-list.component.scss']
})
export class ActuListComponent implements OnInit {
  public actus: Actu[];
  constructor(private actuService: ActuService) {
    actuService.getActus().subscribe(actus => this.actus = actus);
  }

  ngOnInit() {
  }

}
