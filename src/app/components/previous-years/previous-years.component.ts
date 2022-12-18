import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'sp-previous-years',
  templateUrl: './previous-years.component.html',
  styleUrls: ['./previous-years.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviousYearsComponent {
  yearList:Observable<Year[]>;

  constructor(private store:Store) {
    this.yearList = this.store.select(
      selectPreviousYearList
    );
  }
}
