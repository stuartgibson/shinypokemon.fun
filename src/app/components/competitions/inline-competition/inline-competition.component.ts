import { ChangeDetectionStrategy, Component, inject, Input, OnInit, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Competitions } from 'store/reducers/competitions.reducer';
import { DateRangeComponent } from '../../_shared/date-range/date-range.component';

@Component({
    selector: 'sp-inline-competition',
    templateUrl: './inline-competition.component.html',
    styleUrls: ['./inline-competition.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [DateRangeComponent]
})
export class InlineCompetitionComponent implements OnInit {
  @Input() id!:string|null;

  private readonly store:Store = inject(Store);

  competition!:Signal<Competition|null>;

  ngOnInit():void {
    if(!this.id) return;

    this.competition = this.store.selectSignal(
      Competitions.selectByID(this.id)
    );
  }
}
