import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { yearPageViewModel } from 'store/view-models/year-page.view-model';

@Component({
  templateUrl: './year-page.component.html',
  styleUrls: ['./year-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YearPageComponent {
  private store = inject(Store);

  readonly vm$ = this.store.select(yearPageViewModel);
}
