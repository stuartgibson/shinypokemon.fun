import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Year } from 'models/year.model';
import { Observable } from 'rxjs';
import { selectCompetitionsForRoutedYear } from 'store/selectors/competition.selectors';
import { selectRoutedYear } from 'store/selectors/year.selectors';

@Component({
  templateUrl: './year-page.component.html',
  styleUrls: ['./year-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YearPageComponent {

  year$:Observable<Year|null>;
  competitions$:Observable<Competition[]>;

  constructor(
    private store:Store
  ) {
    this.year$ = store.select(selectRoutedYear);
    this.competitions$ = store.select(selectCompetitionsForRoutedYear);
  }
}
