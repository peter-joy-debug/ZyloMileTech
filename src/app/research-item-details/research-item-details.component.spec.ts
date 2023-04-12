import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchItemDetailsComponent } from './research-item-details.component';

describe('ResearchItemDetailsComponent', () => {
  let component: ResearchItemDetailsComponent;
  let fixture: ComponentFixture<ResearchItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchItemDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
