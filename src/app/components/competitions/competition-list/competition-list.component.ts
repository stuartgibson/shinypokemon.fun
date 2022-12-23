import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Competition } from 'models/competition.model';

@Component({
  selector: 'sp-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetitionListComponent {
  @Input() competitions!:Competition[];
}
