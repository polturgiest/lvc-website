import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  _albums:any = [];

  constructor(private _lightbox: Lightbox) {
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

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  images = [
    { src: "./assets/images/1.jpg", imgName: "Image 1" },
    { src: "./assets/images/2.jpg", imgName: "Image 2" },
    { src: "./assets/images/3.jpg", imgName: "Image 3" },
    { src: "./assets/images/4.jpg", imgName: "Image 4" }
  ];
}
