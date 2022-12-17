import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentYearComponent } from './current-year.component';

describe('CurrentYearComponent', () => {
  let component: CurrentYearComponent;
  let fixture: ComponentFixture<CurrentYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
