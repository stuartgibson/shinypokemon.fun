import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Observable } from 'rxjs';
import { Competitions } from 'store/reducers/competitions.reducer';

@Component({
  selector: 'sp-inline-competition',
  templateUrl: './inline-competition.component.html',
  styleUrls: ['./inline-competition.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InlineCompetitionComponent implements OnInit {
  @Input() id!:string|null;

  private readonly store:Store = inject(Store);

  competition$!:Observable<Competition|null>;

  ngOnInit():void {
    if(!this.id) return;

    this.competition$ = this.store.select(
      Competitions.selectByID(this.id)
    );
  }
}
