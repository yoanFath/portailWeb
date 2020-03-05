import {Component, Inject, Input, OnInit} from '@angular/core';
import User from '../../model/User';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'pwe-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent {
  public modifiedUser: User;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private userService: UserService,
              private dialogRef: MatDialogRef<UserUpdateComponent>) {
    this.modifiedUser = Object.assign({}, data.user);
  }
  editUser() {
    this.userService.editUser(this.modifiedUser);
    this.dialogRef.close();
  }
}
