import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../researches-data/country.service';
import { Country } from '../researches-data/country';
import { COUNTRIES } from '../researches-data/countries';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports:[NgbCarouselModule, NgIf, NgFor],
  selector: 'app-research-item-details',
  templateUrl: './research-item-details.component.html',
  styleUrls: ['./research-item-details.component.css'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})

export class ResearchItemDetailsComponent implements OnInit {
  showNavigationArrows = true;
	showNavigationIndicators = true;
  itemId: number;
  item: any; // Replace with your item type

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    config: NgbCarouselConfig
  ) {  this.itemId = 0;
    config.showNavigationArrows = false;
		config.showNavigationIndicators = false;}

  static getItemDetails(itemId: number) {
    return COUNTRIES.find(item => item.id === itemId);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.itemId = +params['id'];
      console.log("Captured: " + this.itemId);
      // Replace the following with your data source and fetching method
      this.item = ResearchItemDetailsComponent.getItemDetails(this.itemId);
      console.log("Name: " + this.item.name);
      if (!this.item) {
        this.router.navigate(['/researches']);
      }
    });
  }
}