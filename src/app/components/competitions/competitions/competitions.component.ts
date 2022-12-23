import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Year } from 'models/year.model';
import { Observable } from 'rxjs';
import { selectYears } from 'store/selectors/year.selectors';

@Component({
  selector: 'sp-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetitionsComponent {
  years$:Observable<Year[]>;

  constructor(private store:Store) {
    this.years$ = store.select(
      selectYears
    );
  }
}
