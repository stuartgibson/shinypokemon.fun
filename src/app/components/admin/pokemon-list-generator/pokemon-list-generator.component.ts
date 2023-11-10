import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from 'models/pokemon.model';
import { PokemonActions } from 'store/actions';
import { Pokemons } from 'store/reducers';

@Component({
  selector: 'sp-pokemon-list-generator',
  templateUrl: './pokemon-list-generator.component.html',
  styleUrls: ['./pokemon-list-generator.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListGeneratorComponent {
  private readonly store:Store = inject(Store);

  selectedPokemon:Signal<Pokemon[]> = this.store.selectSignal(Pokemons.selectSelectedPokemon);
  unselectedPokemon:Signal<Pokemon[]> = this.store.selectSignal(Pokemons.selectUnselectedPokemon);

  addPokemon(pokemon: Pokemon) {
    this.store.dispatch(
      PokemonActions.select({ pokemon })
    );
  }

  removePokemon(pokemon: Pokemon) {
    this.store.dispatch(
      PokemonActions.unselect({ pokemon })
    );
  }
}
