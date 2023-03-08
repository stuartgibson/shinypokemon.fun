import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Years } from 'store/reducers';
import { selectCompetitionsForRoutedYear } from 'store/selectors/competition.selectors';

@Component({
  templateUrl: './year-page.component.html',
  styleUrls: ['./year-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YearPageComponent {
  private store = inject(Store);

  readonly year$ = this.store.select(Years.selectRoutedYear);
  readonly competitions$ = this.store.select(selectCompetitionsForRoutedYear);
}
