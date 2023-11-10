import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pokemon } from 'models/pokemon.model';

@Component({
    selector: 'sp-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class PokemonComponent {
  @Input() pokemon!: Pokemon;
}
