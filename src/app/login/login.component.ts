import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
	imports: [NgbNavModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  active = 'top';
}
