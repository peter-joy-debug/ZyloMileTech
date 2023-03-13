import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-comp',
  templateUrl: './navbar-comp.component.html',
  standalone: true,
	imports: [NgbCollapseModule, RouterLink],
  styleUrls: ['./navbar-comp.component.css']
})
export class NavbarCompComponent {
  isMenuCollapsed = true; 
}
