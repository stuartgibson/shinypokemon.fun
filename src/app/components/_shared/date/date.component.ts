import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { formatDateTime } from 'src/app/helpers/dates.helper';
import { DateTimeFormatterType } from 'src/types/date-time-formatter.types';

@Component({
    selector: 'sp-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateComponent {
  readonly date = input<Date | null>(null);
  readonly format = input<DateTimeFormatterType>('date');

  dateFormatted = (): string | null => {
    const date = this.date();
    return date ? formatDateTime(date, this.format()) : null;
  }
}
