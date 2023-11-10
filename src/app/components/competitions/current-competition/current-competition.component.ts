import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Point } from 'models/point.model';
import { Competitions } from 'store/reducers/competitions.reducer';
import { Points } from 'store/reducers/points.reducer';
import { PointComponent } from '../../point/point.component';
import { CompetitionComponent } from '../competition/competition.component';

@Component({
    selector: 'sp-current-competition',
    templateUrl: './current-competition.component.html',
    styleUrls: ['./current-competition.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CompetitionComponent, PointComponent]
})
export class CurrentCompetitionComponent {
  private readonly store:Store = inject(Store);

  currentCompetition:Signal<Competition|null> =
    this.store.selectSignal(Competitions.selectCurrentCompetition);
  currentPoints:Signal<Point[]> =
    this.store.selectSignal(Points.selectCurrentPoints);
}
