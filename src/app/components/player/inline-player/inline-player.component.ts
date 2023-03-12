import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Player } from 'models/player.model';
import { Observable } from 'rxjs';
import { Players } from 'store/reducers';

@Component({
  selector: 'sp-inline-player',
  templateUrl: './inline-player.component.html',
  styleUrls: ['./inline-player.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InlinePlayerComponent implements OnInit {
  @Input() id!:string|null;

  private readonly store:Store = inject(Store);

  player$!:Observable<Player|null>;

  ngOnInit():void {
    if(!this.id) return;

    this.player$ = this.store.select(
      Players.selectByID(this.id)
    );
  }
}
