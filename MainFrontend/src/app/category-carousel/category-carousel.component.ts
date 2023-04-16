import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-category-carousel',
  standalone: true,
	imports: [NgbCarouselModule, NgIf, NgFor],
  templateUrl: './category-carousel.component.html',
  styleUrls: ['./category-carousel.component.css'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class CategoryCarouselComponent {
  showNavigationArrows = false;
	showNavigationIndicators = true;
  images = [
    {title: 'Technology', short: 'Uncover best Tech-based projects today', src: "https://www.northeastern.edu/graduate/blog/wp-content/uploads/2020/06/iStock-1221293664-1.jpg"},
    {title: 'Agriculture', short: 'Uncover best Agri-based projects today', src: "https://uploads-ssl.webflow.com/62e95dddfb380a0e61193e7d/634970c7cbeed5644711b937_62fd57ccd6890f25796f92f9_AdobeStock_295461823.jpeg"},
    {title: 'Trading', short: 'Uncover best Trading projects today', src: "https://www.bbva.com/wp-content/uploads/2019/11/machine-learning.jpg"},
    {title: 'Education', short: 'Uncover the best Edu-based projects today', src: "https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2020/03/cybersecurity-vs-information-security-illustration.jpg"}
  ];
   


	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = false;
		config.showNavigationIndicators = false;
    config.interval = 9000;
    config.keyboard = true;
    config.pauseOnHover = true;
	}
}
