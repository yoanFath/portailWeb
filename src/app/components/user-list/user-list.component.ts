import { Component, OnInit } from '@angular/core';
import User from '../../model/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'pwe-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: User[];
  constructor(private userService: UserService) {
    userService.getUsers().subscribe(users => this.users = users);
  }

  ngOnInit() {
  }
}
