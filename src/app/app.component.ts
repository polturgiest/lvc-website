import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menus = [
    { routerLink: "home", name: "Home", icon: "home" },
    { routerLink: "courses", name: "Course", icon: "list", submenu: [
      { routerLink: "../courses/mean", name: "MEAN", icon: "group" },
      { routerLink: "../courses/mern", name: "MERN", icon: "handshake" },
      { routerLink: "../courses/mevn", name: "MEVN", icon: "rocket" }
    ] },
    { routerLink: "registration", name: "Registration", icon: "person" },
    { routerLink: "gallery", name: "Gallery", icon: "photo" },
    { routerLink: "contactus", name: "Contact Us", icon: "phone" }
  ]
}
