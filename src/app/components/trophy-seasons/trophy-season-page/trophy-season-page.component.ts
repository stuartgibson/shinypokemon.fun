import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
import { Store } from '@ngrx/store';

import {
  trophySeasonPageViewModel,
  TrophySeasonPageViewModel,
} from 'store/view-models/trophy-season-page.view-model';
import { CompetitionListComponent } from '../../competitions/competition-list/competition-list.component';
import { InlinePlayerComponent } from '../../player/inline-player/inline-player.component';

@Component({
  templateUrl: './trophy-season-page.component.html',
  styleUrls: ['./trophy-season-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [InlinePlayerComponent, CompetitionListComponent],
})
export class TrophySeasonPageComponent {
  private store = inject(Store);
  readonly vm: Signal<TrophySeasonPageViewModel> = this.store.selectSignal(
    trophySeasonPageViewModel
  );
}
