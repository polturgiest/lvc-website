import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Name1: string = 'Angular2';
  appList: string[] = ["Binding", "Display", "Services"];
  isAvailable = false;
}
