import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css'],
})
export class OurTeamComponent {
  teamMembers = [
    {
      name: 'John Doe',
      photo: 'assets/team/john-doe.jpg',
      role: 'CEO'
    },
    {
      name: 'Jane Smith',
      photo: 'assets/team/jane-smith.jpg',
      role: 'CTO'
    },
    {
      name: 'Bob Johnson',
      photo: 'assets/team/bob-johnson.jpg',
      role: 'Developer'
    }
  ];
}
