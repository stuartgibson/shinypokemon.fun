import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DateTimeFormatterType } from 'src/types/date-time-formatter.types';
import { DateComponent } from '../date/date.component';

@Component({
    selector: 'sp-date-range',
    templateUrl: './date-range.component.html',
    styleUrls: ['./date-range.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [DateComponent]
})
export class DateRangeComponent {
  readonly startDate = input<Date | null>(null);
  readonly endDate = input<Date | null>(null);
  readonly format = input<DateTimeFormatterType>('date');

  constructor() {}
}
