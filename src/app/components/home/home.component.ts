import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Observable } from 'rxjs';
import { selectNextCompetition } from 'store/selectors/competition.selectors';

@Component({
  selector: 'sp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  nextCompetition$:Observable<Competition|null>;

  constructor(private store:Store) {
    this.nextCompetition$ = this.store.select(
      selectNextCompetition
    );
  }

}
