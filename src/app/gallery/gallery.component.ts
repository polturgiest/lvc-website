import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = [
    { src: "./assets/images/1.jpg", imgName: "Image 1" },
    { src: "./assets/images/2.jpg", imgName: "Image 2" },
    { src: "./assets/images/3.jpg", imgName: "Image 3" },
    { src: "./assets/images/4.jpg", imgName: "Image 4" }
  ];

  currentSrc = '';

  showImg(img:any) {
    this.currentSrc = img.src;
  }
}
