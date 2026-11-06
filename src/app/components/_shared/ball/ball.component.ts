import { Component, computed, input } from '@angular/core';
import { getBall } from 'src/app/helpers/balls.helper';
import { BallType } from 'types/ball.types';

@Component({
    selector: 'sp-ball',
    templateUrl: './ball.component.html',
    styleUrl: './ball.component.sass'
})
export class BallComponent {
  readonly ballType = input<BallType | null>(null);
  readonly ball = computed(() => {
    const bt = this.ballType();
    return bt ? getBall(bt) : null;
  });
}
