import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserServiceService } from '../svc/user-service.service';
import { IUser } from '../IUser';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  constructor(
    public userservice: UserServiceService
  ) {}

  users$!: IUser[];

  ngOnInit() {
    this.userservice.getUsers()
    .then(response => {
      this.users$ = response.data;
    })
    .catch(error => {
      console.log(error);
    });
  }

  course = new FormControl('');

  courseList: any[] = [
    { name: 'PERN Stack', badge: '10' }, 
    { name: 'MEVN Stack', badge: '10' }, 
    { name: 'DEVOPS', badge: '10' }
  ];
}
