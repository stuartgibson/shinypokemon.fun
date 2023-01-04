import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sp-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent {

}
