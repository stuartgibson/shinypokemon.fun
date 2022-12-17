import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCompetitionComponent } from './current-competition.component';

describe('CurrentCompetitionComponent', () => {
  let component: CurrentCompetitionComponent;
  let fixture: ComponentFixture<CurrentCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentCompetitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
