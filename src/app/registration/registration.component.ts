import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  // Reactive Form
  angForm!: FormGroup;
    constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       address: ['', Validators.required ]
    });
  }
  
  // Template Driven Form
  // name: string = 'Anwar';
  // designation: string = 'Manager';
  // email: string = 'anwar@gmail.com';
  
}
