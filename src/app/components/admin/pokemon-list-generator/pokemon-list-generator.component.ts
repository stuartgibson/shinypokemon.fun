import { ChangeDetectionStrategy, Component, ElementRef, Signal, ViewChild, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from 'models/pokemon.model';
import { PokemonActions } from 'store/actions';
import { Pokemons } from 'store/reducers';
import { CopyToClipboardComponent } from '../../_shared/copy-to-clipboard/copy-to-clipboard.component';
import { PokemonComponent } from '../../pokemon/pokemon/pokemon.component';
import { NgbNav, NgbNavContent, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

type ParsedPokemon = {
  text: string;
  pokemon: Pokemon | undefined;
}

@Component({
    selector: 'sp-pokemon-list-generator',
    templateUrl: './pokemon-list-generator.component.html',
    styleUrl: './pokemon-list-generator.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PokemonComponent, CopyToClipboardComponent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet]
})
export class PokemonListGeneratorComponent {
  private readonly store: Store = inject(Store);

  @ViewChild('pokemonTextArea') pokemonTextArea!: ElementRef;

  selectedPokemon:Signal<Pokemon[]> = this.store.selectSignal(Pokemons.selectSelectedPokemon);
  unselectedPokemon:Signal<Pokemon[]> = this.store.selectSignal(Pokemons.selectUnselectedPokemon);
  parsedPokemon:Signal<ParsedPokemon[]> = signal([]);
  allPokemon: Signal<Pokemon[]> = this.store.selectSignal(Pokemons.selectAll);

  active = 'single';

  addPokemon(pokemon: Pokemon) {
    this.store.dispatch(PokemonActions.select({ pokemon }));
  }

  removePokemon(pokemon: Pokemon) {
    this.store.dispatch(PokemonActions.unselect({ pokemon }));
  }

  filterPokemon(event: any): void {
    this.store.dispatch(PokemonActions.filter({ query: event.target.value }));
  }


  parse(parsedPokemon : ParsedPokemon) : void {
    const normalizedText = parsedPokemon.text.replace(/[^a-zA-Z\s♀♂().\-\\']/g,'').trim().toLowerCase();
    if (!normalizedText) {
      return;
    }

    // First try an exact match
    parsedPokemon.pokemon = this.allPokemon().find(p => p.name.toLowerCase() == normalizedText);

    // Next try what's close
    if (!parsedPokemon.pokemon) {
      parsedPokemon.pokemon = this.allPokemon().find(p => p.name.toLowerCase().includes(normalizedText));    
    }
  }


  onParse() : void {
    this.parsedPokemon = signal([]);

    const textArea = this.pokemonTextArea.nativeElement.value;
    for (const row of textArea.split('\n')) {
      const parsedPokemon = {
        text : row,
        pokemon: undefined
      }

      this.parse(parsedPokemon);
      this.parsedPokemon().push(parsedPokemon);
    }
  }

  onKeyPress(event: Event, parsedPokemon : ParsedPokemon) : void {
    parsedPokemon.text = (event.target as HTMLInputElement).value;    
    this.parse(parsedPokemon);
  }

  addAll() {
    for (const parsedPokemon of this.parsedPokemon()) {
      const pokemon = parsedPokemon.pokemon;
      if (!!pokemon) {
        this.addPokemon(pokemon);
      }
    }

  }

}
