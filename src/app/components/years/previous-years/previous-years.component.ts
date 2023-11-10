import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Year } from 'models/year.model';
import { selectPreviousYears } from 'store/reducers';

@Component({
  selector: 'sp-previous-years',
  templateUrl: './previous-years.component.html',
  styleUrls: ['./previous-years.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviousYearsComponent {
  store:Store = inject(Store);
  yearList:Signal<Year[]> = this.store.selectSignal(selectPreviousYears);
}
