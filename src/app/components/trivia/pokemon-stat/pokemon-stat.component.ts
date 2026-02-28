import { ChangeDetectionStrategy, Component, inject, OnInit, Signal, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from 'models/pokemon.model';
import { Pokemons } from 'store/reducers';
import { InlinePokemonComponent } from "../../pokemon/inline-pokemon/inline-pokemon.component";

@Component({
    selector: 'sp-pokemon-stat',
    templateUrl: './pokemon-stat.component.html',
    styleUrl: './pokemon-stat.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [InlinePokemonComponent]
})
export class PokemonStatComponent implements OnInit {
  readonly id = input.required<string>();
  readonly value = input.required<number>();

  private readonly store:Store = inject(Store);

  pokemon!:Signal<Pokemon|null>;

  ngOnInit():void {
    this.pokemon = this.store.selectSignal(
      Pokemons.selectByID(this.id())
    );
  }
}
