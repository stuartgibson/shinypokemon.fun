import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Competition } from 'models/competition.model';
import { DateRangeComponent } from '../../_shared/date-range/date-range.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'sp-competition-list',
    templateUrl: './competition-list.component.html',
    styleUrls: ['./competition-list.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, DateRangeComponent]
})
export class CompetitionListComponent {
  @Input() competitions!:Competition[];
}
