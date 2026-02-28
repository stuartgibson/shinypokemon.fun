import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  Signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { TrophyCompetitionActions } from 'store/actions';
import {
  TrophyCompetitionPageViewModel,
  trophyCompetitionPageViewModel,
} from 'store/view-models/trophy-competition-page.view-model';
import { PointComponent } from '../../point/point.component';
import { PokemonComponent } from '../../pokemon/pokemon/pokemon.component';
import { TrophyCompetitionComponent } from '../trophy-competition/trophy-competition.component';

@Component({
  selector: 'sp-trophy-competition-page',
  templateUrl: './trophy-competition-page.component.html',
  styleUrl: './trophy-competition-page.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TrophyCompetitionComponent,
    PointComponent,
    PokemonComponent,
    RouterLink,
  ],
})
export class TrophyCompetitionPageComponent implements OnDestroy {
  private readonly store: Store = inject(Store);

  vm: Signal<TrophyCompetitionPageViewModel> = this.store.selectSignal(
    trophyCompetitionPageViewModel
  );

  filterPokemon(event: any): void {
    this.store.dispatch(
      TrophyCompetitionActions.filter({ query: event.target.value })
    );
  }

  ngOnDestroy(): void {
    this.store.dispatch(TrophyCompetitionActions.clear());
  }
}
