import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from 'models/pokemon.model';
import { Observable } from 'rxjs';
import { selectPokemon } from 'store/selectors/pokemon.selectors';

@Component({
  selector: 'sp-inline-pokemon',
  templateUrl: './inline-pokemon.component.html',
  styleUrls: ['./inline-pokemon.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InlinePokemonComponent implements OnInit {
  @Input() id!:string|null;

  pokemon$!:Observable<Pokemon|null>;

  constructor(private store:Store) {
  }

  ngOnInit():void {
    if(!this.id) return;

    this.pokemon$ = this.store.select(
      selectPokemon(this.id)
    );
  }
}
