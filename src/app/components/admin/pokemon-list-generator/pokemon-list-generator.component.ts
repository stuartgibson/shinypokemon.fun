import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from 'models/pokemon.model';
import { Observable } from 'rxjs';
import { PokemonActions } from 'store/actions';
import { getSelectedPokemon, getUnselectedPokemon } from 'store/selectors/pokemon.selectors';

@Component({
  selector: 'sp-pokemon-list-generator',
  templateUrl: './pokemon-list-generator.component.html',
  styleUrls: ['./pokemon-list-generator.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListGeneratorComponent {
  selectedPokemon$: Observable<Pokemon[]>;
  unselectedPokemon$: Observable<Pokemon[]>;

  constructor(
    private store:Store
  ){
    this.selectedPokemon$ = store.select(getSelectedPokemon);
    this.unselectedPokemon$ = store.select(getUnselectedPokemon);
  }

  addPokemon(pokemon: Pokemon) {
    this.store.dispatch(
      PokemonActions.selectPokemon({ pokemon })
    );
  }

  removePokemon(pokemon: Pokemon) {
    this.store.dispatch(
      PokemonActions.unselectPokemon({ pokemon })
    );
  }

  trackBySelected(index: number, pokemon: Pokemon) {
    return pokemon.id;
  }

  trackByUnselected(index: number, pokemon: Pokemon) {
    return pokemon.id;
  }
}
