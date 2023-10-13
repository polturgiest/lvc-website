import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../svc/user-service.service';
import { IUser } from '../IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$!: IUser[];
  
  constructor(
    public userservice: UserServiceService
  ) {}

  ngOnInit() {
    this.userservice.getUsers()
    .then(response => {
      this.users$ = response.data;
    })
    .catch(error => {
      console.log(error);
    });
  }
}
