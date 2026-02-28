import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { YearPageViewModel, yearPageViewModel } from 'store/view-models/year-page.view-model';
import { CompetitionListComponent } from '../../competitions/competition-list/competition-list.component';
import { InlinePlayerComponent } from '../../player/inline-player/inline-player.component';

@Component({
    templateUrl: './year-page.component.html',
    styleUrl: './year-page.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [InlinePlayerComponent, CompetitionListComponent]
})
export class YearPageComponent {
  private store = inject(Store);
  readonly vm:Signal<YearPageViewModel> = this.store.selectSignal(yearPageViewModel);
}
