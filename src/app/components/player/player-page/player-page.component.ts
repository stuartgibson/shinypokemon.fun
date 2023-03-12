import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Player } from 'models/player.model';
import { Observable } from 'rxjs';
import { Players } from 'store/reducers';

@Component({
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerPageComponent {
  private readonly store:Store = inject(Store);

  player$:Observable<Player|null> = this.store.select(Players.selectRoutedPlayer);
}
