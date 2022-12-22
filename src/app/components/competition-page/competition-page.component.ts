import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Observable } from 'rxjs';
import { selectRoutedCompetition } from 'store/selectors/competition.selectors';

@Component({
  selector: 'sp-competition-page',
  templateUrl: './competition-page.component.html',
  styleUrls: ['./competition-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetitionPageComponent {
  competition$: Observable<Competition|null>;

  constructor(private store:Store) {
    this.competition$ = this.store.select(
      selectRoutedCompetition
    );
  }
}
