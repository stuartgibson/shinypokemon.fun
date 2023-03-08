import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Years } from 'store/reducers';

@Component({
  selector: 'sp-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetitionsComponent {
  private readonly store = inject(Store);
  readonly years$ = this.store.select(Years.selectYears);
}
