import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResearchesComponent } from './researches/researches.component';
import {ResearchItemDetailsComponent} from './research-item-details/research-item-details.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'researches' , component: ResearchesComponent},
  {path: 'researches/item-details/:id', component: ResearchItemDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
