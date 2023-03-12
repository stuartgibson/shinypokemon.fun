import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Years } from 'store/reducers';
import { Competitions } from 'store/reducers/competitions.reducer';

@Component({
  templateUrl: './year-page.component.html',
  styleUrls: ['./year-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YearPageComponent {
  private store = inject(Store);

  readonly year$ = this.store.select(Years.selectRoutedYear);
  readonly competitions$ = this.store.select(Competitions.selectCompetitionsForRoutedYear);
}
