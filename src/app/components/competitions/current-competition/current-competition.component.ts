import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Point } from 'models/point.model';
import { Observable } from 'rxjs';
import { selectCurrentCompetition } from 'store/selectors/competition.selectors';
import { selectCurrentPoints } from 'store/selectors/points.selectors';

@Component({
  selector: 'sp-current-competition',
  templateUrl: './current-competition.component.html',
  styleUrls: ['./current-competition.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentCompetitionComponent {
  currentCompetition$:Observable<Competition|null>;
  currentPoints$:Observable<Point[]>;

  constructor(private store:Store) {
    this.currentCompetition$ = this.store.select(
      selectCurrentCompetition
    );
    this.currentPoints$ = this.store.select(
      selectCurrentPoints
    );
  }

  trackByFn(index:number, item:Point):string {
    return item.id;
  }
}
