import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { competitionsPageViewModel } from 'store/view-models/competitions-page.view-model';

@Component({
  selector: 'sp-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetitionsComponent {
  private readonly store = inject(Store);
  readonly vm$ = this.store.select(competitionsPageViewModel);
}
