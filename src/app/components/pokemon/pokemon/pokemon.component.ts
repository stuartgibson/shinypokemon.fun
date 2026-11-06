import { Component, input } from '@angular/core';
import { Pokemon } from 'models/pokemon.model';

@Component({
    selector: 'sp-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrl: './pokemon.component.sass'
})
export class PokemonComponent {
  readonly pokemon = input.required<Pokemon>();
}
