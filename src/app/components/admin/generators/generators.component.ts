import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Player } from 'models/player.model';
import { Pokemon } from 'models/pokemon.model';
import { Observable } from 'rxjs';
import { Players, Pokemons } from 'store/reducers';
import { Competitions } from 'store/reducers/competitions.reducer';

@Component({
  templateUrl: './generators.component.html',
  styleUrls: ['./generators.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneratorsComponent {

  private readonly store:Store = inject(Store);

  readonly allPokemon$:Observable<Pokemon[]> = this.store.select(Pokemons.selectAll);
  readonly competitions$:Observable<Competition[]> = this.store.select(Competitions.selectAll);
  readonly currentCompetition$:Observable<Competition|null> = this.store.select(Competitions.selectCurrentCompetition);
  readonly players$:Observable<Player[]> = this.store.select(Players.selectAll);

  active = 'points';
}
