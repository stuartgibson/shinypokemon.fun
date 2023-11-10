import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Competitions } from 'store/reducers/competitions.reducer';

@Component({
  selector: 'sp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly store:Store = inject(Store);

  nextCompetition:Signal<Competition|null> =
    this.store.selectSignal(Competitions.selectNextCompetition);
}
