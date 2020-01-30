import {Component, Input, OnInit} from '@angular/core';
import Actu from '../../model/Actu';

@Component({
  selector: 'pwe-actu-card',
  templateUrl: './actu-card.component.html',
  styleUrls: ['./actu-card.component.scss']
})
export class ActuCardComponent implements OnInit {
  @Input()
  public actu: Actu;
  constructor() {
  }

  ngOnInit() {
  }

}
