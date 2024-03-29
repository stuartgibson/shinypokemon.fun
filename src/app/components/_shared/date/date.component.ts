import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { formatDateTime } from 'src/app/helpers/dates.helper';
import { DateTimeFormatterType } from 'src/types/date-time-formatter.types';

@Component({
    selector: 'sp-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class DateComponent implements OnInit {
  @Input() date:Date|null = null;
  @Input() format?:DateTimeFormatterType;

  constructor() {}

  ngOnInit(): void {
    this.format ||= 'date';
  }

  dateFormatted = ():string|null =>
    this.date ? formatDateTime(this.date, this.format) : null
}
