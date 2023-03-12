import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Year } from 'models/year.model';
import { Observable } from 'rxjs';
import { Years } from 'store/reducers';
import { Competitions } from 'store/reducers/competitions.reducer';

@Component({
  selector: 'sp-current-year',
  templateUrl: './current-year.component.html',
  styleUrls: ['./current-year.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentYearComponent {
  private readonly store:Store = inject(Store);

  currentYear$:Observable<Year|null> =
    this.store.select(Years.selectCurrentYear);
  yearCompetitions$:Observable<Competition[]> =
    this.store.select(Competitions.selectPreviousCompetitionsForCurrentYear)
}
