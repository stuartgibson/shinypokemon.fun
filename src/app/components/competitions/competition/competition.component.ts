import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Competition } from 'models/competition.model';
import { InlinePlayerComponent } from '../../player/inline-player/inline-player.component';
import { DateRangeComponent } from '../../_shared/date-range/date-range.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'sp-competition',
    templateUrl: './competition.component.html',
    styleUrls: ['./competition.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, DateRangeComponent, InlinePlayerComponent]
})
export class CompetitionComponent {
  @Input() competition!:Competition;
}
