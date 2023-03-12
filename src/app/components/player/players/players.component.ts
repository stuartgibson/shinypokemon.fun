import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PlayerDatum, playersPageViewModel } from 'store/view-models/players-page.view-model';

@Component({
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayersComponent {
  private readonly store:Store = inject(Store);

  vm$:Observable<{playersData:PlayerDatum[]}> = this.store.select(playersPageViewModel);
}
