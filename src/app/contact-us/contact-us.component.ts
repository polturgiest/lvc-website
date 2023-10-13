import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {

  public user!: User; // our model
  showdetails: boolean = false;

  ngOnInit() {
    // we will initialize our form here
    this.user = {
      name: '',
      address: {
        street: '',
        postcode: '', // set default value to 8000
      },
    };
  }

  save(model: User, isValid: boolean) {
    // check if model is valid// if valid, call API to save customer
    if(isValid) {
      this.showdetails = true;
      console.log(model, isValid);
    }
    
  }

  // people: any[] = [
  //   {
  //     "name": "Douglas  Pace",
  //     "age": 35,
  //     "country": 'MARS'
  //   },
  //   {
  //     "name": "Mcleod  Mueller",
  //     "age": 32,
  //     "country": 'USA'
  //   },
  //  {
  //     "name": "Cook  Tyson",
  //     "age": 32,
  //     "country": 'USA'
  //   }
  // ];
}
