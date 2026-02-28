import { ChangeDetectionStrategy, Component, inject, OnInit, Signal, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from 'models/pokemon.model';
import { Pokemons } from 'store/reducers';

@Component({
    selector: 'sp-inline-pokemon',
    templateUrl: './inline-pokemon.component.html',
    styleUrl: './inline-pokemon.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InlinePokemonComponent implements OnInit {
  readonly id = input.required<string | null>();

  private readonly store:Store = inject(Store);

  pokemon!:Signal<Pokemon|null>;

  ngOnInit():void {
    const id = this.id();
    if(!id) return;

    this.pokemon = this.store.selectSignal(
      Pokemons.selectByID(id)
    );
  }
}
