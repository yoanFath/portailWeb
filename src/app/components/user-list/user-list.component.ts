import { Component, OnInit } from '@angular/core';
import User from '../../model/User';
import {UserService} from '../../services/user.service';
import {RightService} from '../../services/right.service';

@Component({
  selector: 'pwe-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users: User[];
  public connectedUser: User;
  constructor(private userService: UserService, public right: RightService) {
    userService.getUsers().subscribe(users => this.users = users);
    this.right.getUser().subscribe(user => this.connectedUser = user);
  }

  ngOnInit() {
  }
}
