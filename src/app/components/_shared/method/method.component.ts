import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Method } from 'models/method.model';
import { getMethod } from 'src/app/helpers/methods.helper';
import { MethodType } from 'types/method.types';

@Component({
    selector: 'sp-method',
    templateUrl: './method.component.html',
    styleUrls: ['./method.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class MethodComponent implements OnChanges {
  @Input() methodType:MethodType|null = null;

  method:Method|null = null;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if( this.methodType ) {
      this.method = getMethod(this.methodType);
    } else {
      this.method = null;
    }
  }
}
