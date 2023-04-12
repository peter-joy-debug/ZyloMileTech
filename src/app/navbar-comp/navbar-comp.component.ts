import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar-comp',
  templateUrl: './navbar-comp.component.html',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
	imports: [NgbCollapseModule, RouterLink,],
  
  styleUrls: ['./navbar-comp.component.css']
})
export class NavbarCompComponent {
  isMenuCollapsed = true; 
  // closeResult: string;

	constructor(private offcanvasService: NgbOffcanvas) {
  
  }

	openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

	openTop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'top' });
	}

	openBottom(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'bottom' });
	}

	openNoBackdrop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdrop: false });
	}

	openStaticBackdrop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdrop: 'static' });
	}

	openScroll(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { scroll: true });
	}

	openNoKeyboard(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { keyboard: false });
	}

	openNoAnimation(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { animation: false });
	}

	openCustomBackdropClass(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdropClass: 'bg-info' });
	}

	openCustomPanelClass(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { panelClass: 'bg-info' });
	}
}
