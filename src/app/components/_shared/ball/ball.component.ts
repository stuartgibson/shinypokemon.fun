import { ChangeDetectionStrategy, Component, OnChanges, SimpleChanges, input } from '@angular/core';
import { Ball } from 'models/ball.model';
import { getBall } from 'src/app/helpers/balls.helper';
import { BallType } from 'types/ball.types';

@Component({
    selector: 'sp-ball',
    templateUrl: './ball.component.html',
    styleUrls: ['./ball.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BallComponent implements OnChanges {
  readonly ballType = input<BallType | null>(null);

  ball:Ball|null = null;

  ngOnChanges(changes: SimpleChanges): void {
    const ballType = this.ballType();
    if( ballType ) {
      this.ball = getBall(ballType);
    } else {
      this.ball = null;
    }
  }
}
