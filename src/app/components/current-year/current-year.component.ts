import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Year } from 'models/year.model';
import { Observable } from 'rxjs';
import { selectPreviousCompetitionsForCurrentYear } from 'store/selectors/competition.selectors';
import { selectCurrentYear } from 'store/selectors/year.selectors';

@Component({
  selector: 'sp-current-year',
  templateUrl: './current-year.component.html',
  styleUrls: ['./current-year.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentYearComponent {
  currentYear$:Observable<Year|null>;
  yearCompetitions$:Observable<Competition[]>;

  constructor(public store:Store) {
    this.currentYear$ = this.store.select(
      selectCurrentYear
    );
    this.yearCompetitions$ = this.store.select(
      selectPreviousCompetitionsForCurrentYear
    )
  }
}
