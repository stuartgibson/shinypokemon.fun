import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Player } from 'models/player.model';
import { Observable } from 'rxjs';
import { Players } from 'store/reducers';

@Component({
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayersComponent {
  private readonly store:Store = inject(Store);

  players$:Observable<Player[]> = this.store.select(Players.selectAll);
}
