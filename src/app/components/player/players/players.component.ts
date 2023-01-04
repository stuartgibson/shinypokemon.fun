import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Player } from 'models/player.model';
import { Observable } from 'rxjs';
import { selectPlayers } from 'store/selectors/player.selectors';

@Component({
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayersComponent {
  players$:Observable<Player[]>;

  constructor(private store:Store) {
    this.players$ = store.select(
      selectPlayers
    );
  }
}
