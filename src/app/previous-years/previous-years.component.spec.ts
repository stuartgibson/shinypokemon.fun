import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousYearsComponent } from './previous-years.component';

describe('PreviousYearsComponent', () => {
  let component: PreviousYearsComponent;
  let fixture: ComponentFixture<PreviousYearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousYearsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
