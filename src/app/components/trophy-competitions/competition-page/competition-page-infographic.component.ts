import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  competitionPageViewModel,
  CompetitionPageViewModel,
} from 'store/view-models/competition-page.view-model';
import { CompetitionComponent } from '../trophy-competition/competition.component';

@Component({
  selector: 'sp-competition-page-infographic',
  templateUrl: './competition-page-infographic.component.html',
  styleUrls: ['./competition-page-infographic.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, CompetitionComponent, RouterLink],
})
export class CompetitionPageInfographicComponent {
  private readonly store: Store = inject(Store);

  vm: Signal<CompetitionPageViewModel> = this.store.selectSignal(
    competitionPageViewModel
  );
}
