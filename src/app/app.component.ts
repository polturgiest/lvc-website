import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _albums:any = [];

  constructor() {
    for (let i = 1; i <= 30; i++) {
      const src = './assets/images/lightbox/image-' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = './assets/images/lightbox/image-' + i + '.jpg';
      let album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this._albums.push(album);
    }
  }

  menus = [
    { routerLink: "home", name: "Home", icon: "home" },
    { routerLink: "courses", name: "Course", icon: "list", submenu: [
      { routerLink: "../courses/mean", name: "MEAN", icon: "group" },
      { routerLink: "../courses/mern", name: "MERN", icon: "handshake" },
      { routerLink: "../courses/mevn", name: "MEVN", icon: "rocket" }
    ] },
    { routerLink: "users", name: "Users", icon: "group" },
    { routerLink: "registration", name: "Registration", icon: "person" },
    { routerLink: "gallery", name: "Gallery", icon: "photo" },
    { routerLink: "contactus", name: "Contact Us", icon: "phone" }
  ]
}
