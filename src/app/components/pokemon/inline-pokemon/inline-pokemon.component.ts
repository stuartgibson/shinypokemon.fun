import { ChangeDetectionStrategy, Component, inject, Input, OnInit, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from 'models/pokemon.model';
import { Pokemons } from 'store/reducers';

@Component({
    selector: 'sp-inline-pokemon',
    templateUrl: './inline-pokemon.component.html',
    styleUrls: ['./inline-pokemon.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class InlinePokemonComponent implements OnInit {
  @Input() id!:string|null;

  private readonly store:Store = inject(Store);

  pokemon!:Signal<Pokemon|null>;

  ngOnInit():void {
    if(!this.id) return;

    this.pokemon = this.store.selectSignal(
      Pokemons.selectByID(this.id)
    );
  }
}
