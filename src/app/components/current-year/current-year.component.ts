import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sp-current-year',
  templateUrl: './current-year.component.html',
  styleUrls: ['./current-year.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentYearComponent {

}
