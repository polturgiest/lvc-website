import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  course = new FormControl('');

  courseList: any[] = [
    { name: 'PERN Stack', badge: '10' }, 
    { name: 'MEVN Stack', badge: '10' }, 
    { name: 'DEVOPS', badge: '10' }
  ];
}
