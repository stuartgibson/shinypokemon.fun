import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Player } from 'models/player.model';
import { Players } from 'store/reducers';

@Component({
    templateUrl: './player-page.component.html',
    styleUrls: ['./player-page.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class PlayerPageComponent {
  private readonly store:Store = inject(Store);

  player:Signal<Player|null> = this.store.selectSignal(Players.selectRoutedPlayer);
}
