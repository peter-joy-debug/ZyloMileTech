import { AsyncPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Country } from './country';
import { CountryService } from './country.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-researches-data',
  templateUrl: './researches-data.component.html',
  standalone: true,
	imports: [
		NgFor,
		DecimalPipe,NgbCollapseModule,
		FormsModule,RouterLink,
		AsyncPipe,
		NgbTypeaheadModule,
		NgbdSortableHeader,
		NgbPaginationModule,
		NgIf,
	],
  providers: [CountryService, DecimalPipe],
  styleUrls: ['./researches-data.component.css']
})
export class ResearchesDataComponent {
  public isCollapsed = true;
  countries$: Observable<Country[]>;
	total$: Observable<number>;

	// @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

	constructor(public service: CountryService) {
		this.countries$ = service.countries$;
		this.total$ = service.total$;
    this.headers = new QueryList<NgbdSortableHeader>();
	}

	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		this.service.sortColumn = column;
		this.service.sortDirection = direction;
	}
}
