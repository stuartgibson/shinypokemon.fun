import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from 'models/pokemon.model';
import { Observable } from 'rxjs';
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

  selectedPokemon$:Observable<Pokemon[]> = this.store.select(Pokemons.selectSelectedPokemon);
  unselectedPokemon$:Observable<Pokemon[]> = this.store.select(Pokemons.selectUnselectedPokemon);

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

  trackBySelected(index: number, pokemon: Pokemon) {
    return pokemon.id;
  }

  trackByUnselected(index: number, pokemon: Pokemon) {
    return pokemon.id;
  }
}
