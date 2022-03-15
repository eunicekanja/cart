import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cart';
  imagePaths:string[]=[
    '/assets/images/image-product-1.jpg',
    '/assets/images/image-product-2.jpg',
    '/assets/images/image-product-3.jpg',
    '/assets/images/image-product-4.jpg',

  ]
  constructor(){}
}
