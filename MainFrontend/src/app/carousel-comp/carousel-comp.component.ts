import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
// import { Injectable } from '@angular/core';

@Component({
  selector: 'app-carousel-comp',
  standalone: true,
	imports: [NgbCarouselModule, NgIf, NgFor],
  templateUrl: './carousel-comp.component.html',
  styleUrls: ['./carousel-comp.component.css'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})

export class CarouselCompComponent  {
  showNavigationArrows = true;
	showNavigationIndicators = true;
  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "https://picsum.photos/id/431/900/500"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "https://picsum.photos/id/17/900/500 "},
    {title: 'Third Slide', short: 'Third Slide Short', src: "https://picsum.photos/id/500/900/500"}
  ];
   


	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = false;
		config.showNavigationIndicators = false;
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
	}
}

