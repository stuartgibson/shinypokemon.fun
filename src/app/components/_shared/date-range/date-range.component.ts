import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DateTimeFormatterType } from 'src/types/date-time-formatter.types';

@Component({
  selector: 'sp-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateRangeComponent {
  @Input() startDate:Date|null = null;
  @Input() endDate:Date|null = null;
  @Input() format?:DateTimeFormatterType;

  constructor() {}
}
