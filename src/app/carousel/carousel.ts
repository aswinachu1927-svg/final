import { Component, AfterViewInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel implements AfterViewInit {

  ngAfterViewInit(): void {

    const element = document.querySelector('#animeCarousel');

    if (element) {
      new bootstrap.Carousel(element, {
        interval: 2000,
        ride: 'carousel',
        pause: false
      });
    }

  }

}
