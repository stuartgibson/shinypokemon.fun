import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlayerDatum, playersPageViewModel } from 'store/view-models/players-page.view-model';
import { InlinePlayerComponent } from '../inline-player/inline-player.component';

@Component({
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [InlinePlayerComponent]
})
export class PlayersComponent {
  private readonly store:Store = inject(Store);

  vm:Signal<{playersData:PlayerDatum[]}> = this.store.selectSignal(playersPageViewModel);
}
