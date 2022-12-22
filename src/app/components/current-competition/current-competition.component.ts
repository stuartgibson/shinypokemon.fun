import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Observable } from 'rxjs';
import { selectCurrentCompetition } from 'store/selectors/competition.selectors';

@Component({
  selector: 'sp-current-competition',
  templateUrl: './current-competition.component.html',
  styleUrls: ['./current-competition.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentCompetitionComponent {
  currentCompetition$:Observable<Competition|null>;

  constructor(private store:Store) {
    this.currentCompetition$ = this.store.select(
      selectCurrentCompetition
    );
  }
}
