import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Year } from 'models/year.model';
import { Years } from 'store/reducers';
import { Competitions } from 'store/reducers/competitions.reducer';
import { CompetitionListComponent } from '../../competitions/competition-list/competition-list.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'sp-current-year',
    templateUrl: './current-year.component.html',
    styleUrls: ['./current-year.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, CompetitionListComponent]
})
export class CurrentYearComponent {
  private readonly store:Store = inject(Store);

  currentYear:Signal<Year|null> =
    this.store.selectSignal(Years.selectCurrentYear);
  yearCompetitions:Signal<Competition[]> =
    this.store.selectSignal(Competitions.selectPreviousCompetitionsForCurrentYear)
}
