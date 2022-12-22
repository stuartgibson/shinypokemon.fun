import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sp-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {

}
