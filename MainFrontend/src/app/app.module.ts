import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarCompComponent } from './navbar-comp/navbar-comp.component';
import { CarouselCompComponent } from './carousel-comp/carousel-comp.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { NgbCarouselConfig,NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ThreeJsComponent } from './three-js/three-js.component';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { CategoryCarouselComponent } from './category-carousel/category-carousel.component';
import { HomeComponent } from './home/home.component';
import { ResearchesComponent } from './researches/researches.component';
import { ResearchesDataComponent } from './researches-data/researches-data.component';
import { ResearchItemDetailsComponent } from './research-item-details/research-item-details.component';



@NgModule({
  declarations: [
    AppComponent,
    ThreeJsComponent,
    FooterMainComponent,
    OurTeamComponent,
    HomeComponent,
    ResearchesComponent,
 

    

  ],

  imports: [
    BrowserModule,   ResearchItemDetailsComponent,
    AppRoutingModule,NgbModule,NgbAlert, CategoryCarouselComponent,ResearchesDataComponent,
    NavbarCompComponent,CarouselCompComponent,NgbPaginationModule, NgbAlertModule,BrowserAnimationsModule,NgbCarouselModule, NgIf, NgFor
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
