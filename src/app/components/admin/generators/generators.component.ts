import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Player } from 'models/player.model';
import { Pokemon } from 'models/pokemon.model';
import { Players, Pokemons } from 'store/reducers';
import { Competitions } from 'store/reducers/competitions.reducer';

@Component({
  templateUrl: './generators.component.html',
  styleUrls: ['./generators.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneratorsComponent {

  private readonly store:Store = inject(Store);

  readonly allPokemon:Signal<Pokemon[]> = this.store.selectSignal(Pokemons.selectAll);
  readonly competitions:Signal<Competition[]> = this.store.selectSignal(Competitions.selectAll);
  readonly currentCompetition:Signal<Competition|null> = this.store.selectSignal(Competitions.selectCurrentCompetition);
  readonly players:Signal<Player[]> = this.store.selectSignal(Players.selectAll);

  active = 'points';
}
