import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Year } from 'models/year.model';
import { Observable } from 'rxjs';
import { selectPreviousYears } from 'store/reducers';

@Component({
  selector: 'sp-previous-years',
  templateUrl: './previous-years.component.html',
  styleUrls: ['./previous-years.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviousYearsComponent {
  yearList$:Observable<Year[]>;

  constructor(public store:Store) {
    this.yearList$ = this.store.select(
      selectPreviousYears
    );
  }
}
