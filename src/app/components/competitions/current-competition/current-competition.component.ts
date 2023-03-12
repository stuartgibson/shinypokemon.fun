import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Point } from 'models/point.model';
import { Observable } from 'rxjs';
import { Competitions } from 'store/reducers/competitions.reducer';
import { Points } from 'store/reducers/points.reducer';

@Component({
  selector: 'sp-current-competition',
  templateUrl: './current-competition.component.html',
  styleUrls: ['./current-competition.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentCompetitionComponent {
  private readonly store:Store = inject(Store);

  currentCompetition$:Observable<Competition|null> =
    this.store.select(Competitions.selectCurrentCompetition);
  currentPoints$:Observable<Point[]> =
    this.store.select(Points.selectCurrentPoints);

  trackByFn(index:number, item:Point):string {
    return item.id;
  }
}
