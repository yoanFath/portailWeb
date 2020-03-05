import {Component, Input, OnInit} from '@angular/core';
import User from '../../model/User';
import {MatDialog} from '@angular/material';
import {UserUpdateComponent} from '../user-update/user-update.component';

@Component({
  selector: 'pwe-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input()
  public user: User;

  @Input()
  public connectedUser: User;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  editUser() {
    const userInput = this.dialog.open(UserUpdateComponent, {
      width: '50%',
      data: {
        user: this.user
      }
    });
  }
}
