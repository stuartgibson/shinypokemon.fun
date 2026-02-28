import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Pokemon } from 'models/pokemon.model';

@Component({
    selector: 'sp-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrl: './pokemon.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonComponent {
  readonly pokemon = input.required<Pokemon>();
}
