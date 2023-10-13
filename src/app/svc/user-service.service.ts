import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  getUsers() {
    return axios.get('https://jsonplaceholder.typicode.com/users', {
      headers: {
        'x-rapidapi-host': 'jokes-by-api-ninjas.p.rapidapi.com',
        'x-rapidapi-key': 'your-rapid-api-key'
      }
    });
  }
}
