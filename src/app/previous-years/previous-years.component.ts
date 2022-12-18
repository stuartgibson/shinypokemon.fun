import { Component } from '@angular/core';

@Component({
  selector: 'sp-previous-years',
  templateUrl: './previous-years.component.html',
  styleUrls: ['./previous-years.component.sass']
})
export class PreviousYearsComponent {
  yearList:Observable<Year[]>;

  constructor(private store:Store) {
    this.yearList = this.store.select(
      selectPreviousYearList
    );
  }
}
