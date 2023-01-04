import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Player } from 'models/player.model';
import { Observable } from 'rxjs';
import { selectRoutedPlayer } from 'store/selectors/player.selectors';

@Component({
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerPageComponent {
  player$:Observable<Player|null>;

  constructor(private store:Store) {
    this.player$ = store.select(
      selectRoutedPlayer
    );
  }
}
