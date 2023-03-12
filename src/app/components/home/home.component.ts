import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Observable } from 'rxjs';
import { Competitions } from 'store/reducers/competitions.reducer';

@Component({
  selector: 'sp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly store:Store = inject(Store);

  nextCompetition$:Observable<Competition|null> =
    this.store.select(Competitions.selectNextCompetition);
}
