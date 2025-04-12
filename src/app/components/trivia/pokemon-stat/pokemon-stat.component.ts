import { ChangeDetectionStrategy, Component, inject, Input, OnInit, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Point } from 'models/point.model';
import { Pokemon } from 'models/pokemon.model';
import { Pokemons } from 'store/reducers';
import { NgStyle } from '@angular/common';
import { InlinePokemonComponent } from "../../pokemon/inline-pokemon/inline-pokemon.component";

@Component({
    selector: 'sp-pokemon-stat',
    templateUrl: './pokemon-stat.component.html',
    styleUrls: ['./pokemon-stat.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgStyle, InlinePokemonComponent]
})
export class PokemonStatComponent implements OnInit {
  @Input() id!: string;
  @Input() value!: number;

  private readonly store:Store = inject(Store);

  pokemon!:Signal<Pokemon|null>;

  ngOnInit():void {
    this.pokemon = this.store.selectSignal(
      Pokemons.selectByID(this.id)
    );
  }
}
