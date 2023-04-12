import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchesDataComponent } from './researches-data.component';

describe('ResearchesDataComponent', () => {
  let component: ResearchesDataComponent;
  let fixture: ComponentFixture<ResearchesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchesDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
