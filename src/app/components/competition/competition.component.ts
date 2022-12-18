import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Competition } from 'models/competition.model';

@Component({
  selector: 'sp-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetitionComponent {
  @Input() competition!:Competition;

}
