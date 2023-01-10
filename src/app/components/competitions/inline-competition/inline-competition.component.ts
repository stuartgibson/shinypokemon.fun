import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Observable } from 'rxjs';
import { selectCompetition } from 'store/selectors/competition.selectors';

@Component({
  selector: 'sp-inline-competition',
  templateUrl: './inline-competition.component.html',
  styleUrls: ['./inline-competition.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InlineCompetitionComponent implements OnInit {
  @Input() id!:string|null;

  competition$!:Observable<Competition|null>;

  constructor(private store:Store) {
  }

  ngOnInit():void {
    if(!this.id) return;

    this.competition$ = this.store.select(
      selectCompetition(this.id)
    );
  }
}
