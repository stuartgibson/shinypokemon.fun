import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from 'models/pokemon.model';
import { Observable } from 'rxjs';
import { Pokemons } from 'store/reducers';

@Component({
  selector: 'sp-inline-pokemon',
  templateUrl: './inline-pokemon.component.html',
  styleUrls: ['./inline-pokemon.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InlinePokemonComponent implements OnInit {
  @Input() id!:string|null;

  private readonly store:Store = inject(Store);

  pokemon$!:Observable<Pokemon|null>;

  ngOnInit():void {
    if(!this.id) return;

    this.pokemon$ = this.store.select(
      Pokemons.selectByID(this.id)
    );
  }
}
