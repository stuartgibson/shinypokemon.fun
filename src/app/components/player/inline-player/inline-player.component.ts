import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Player } from 'models/player.model';
import { Observable } from 'rxjs';
import { selectPlayer } from 'store/selectors/player.selectors';

@Component({
  selector: 'sp-inline-player',
  templateUrl: './inline-player.component.html',
  styleUrls: ['./inline-player.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InlinePlayerComponent implements OnInit {
  @Input() id!:string|null;

  player$!:Observable<Player|null>;

  constructor(private store:Store) {
  }

  ngOnInit():void {
    if(!this.id) return;

    this.player$ = this.store.select(
      selectPlayer(this.id)
    );
  }
}
