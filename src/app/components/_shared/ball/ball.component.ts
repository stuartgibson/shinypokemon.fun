import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Ball } from 'models/ball.model';
import { getBall } from 'src/app/helpers/balls.helper';
import { BallType } from 'types/ball.types';

@Component({
    selector: 'sp-ball',
    templateUrl: './ball.component.html',
    styleUrls: ['./ball.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class BallComponent implements OnChanges {
  @Input() ballType:BallType|null = null;

  ball:Ball|null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if( this.ballType ) {
      this.ball = getBall(this.ballType);
    } else {
      this.ball = null;
    }
  }
}
