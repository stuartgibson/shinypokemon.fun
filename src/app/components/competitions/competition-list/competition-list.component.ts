import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Competition } from 'models/competition.model';
import { DateRangeComponent } from '../../_shared/date-range/date-range.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'sp-competition-list',
    templateUrl: './competition-list.component.html',
    styleUrl: './competition-list.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, DateRangeComponent]
})
export class CompetitionListComponent {
  readonly competitions = input.required<Competition[]>();
}
