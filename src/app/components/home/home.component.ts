import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Competitions } from 'store/reducers/competitions.reducer';
import { TrophyCompetitions } from 'store/reducers/trophy-competitions.reducer';
import { CompetitionNavComponent } from '../competitions/competition-nav/competition-nav.component';
import { CompetitionComponent } from '../competitions/competition/competition.component';
import { CurrentCompetitionComponent } from '../competitions/current-competition/current-competition.component';

@Component({
  selector: 'sp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    CurrentCompetitionComponent,
    CompetitionComponent,
    CompetitionNavComponent,
    RouterLink,
  ],
})
export class HomeComponent {
  private readonly store: Store = inject(Store);

  currentTrophyCompetition: Signal<Competition | null> =
    this.store.selectSignal(TrophyCompetitions.selectCurrentCompetition);

  nextCompetition: Signal<Competition | null> = this.store.selectSignal(
    Competitions.selectNextCompetition
  );
}
