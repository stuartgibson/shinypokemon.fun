import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Point } from 'models/point.model';

@Component({
  selector: 'sp-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PointComponent {
  @Input() point!: Point;
}
