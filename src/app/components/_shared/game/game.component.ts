import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { getGame } from 'src/app/helpers/games.helper';
import { GameType } from 'types/game.types';

@Component({
    selector: 'sp-game',
    templateUrl: './game.component.html',
    styleUrl: './game.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent {
  readonly gameType = input<GameType | null>(null);
  readonly game = computed(() => {
    const gt = this.gameType();
    return gt ? getGame(gt) : null;
  });
}
