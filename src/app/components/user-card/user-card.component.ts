import {Component, Input, OnInit} from '@angular/core';
import User from '../../model/User';

@Component({
  selector: 'pwe-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input()
  public user: User;
  constructor() { }

  ngOnInit() {
  }

}
