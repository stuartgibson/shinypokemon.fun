import { ChangeDetectionStrategy, Component, OnChanges, SimpleChanges, input } from '@angular/core';
import { Method } from 'models/method.model';
import { getMethod } from 'src/app/helpers/methods.helper';
import { MethodType } from 'types/method.types';

@Component({
    selector: 'sp-method',
    templateUrl: './method.component.html',
    styleUrls: ['./method.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MethodComponent implements OnChanges {
  readonly methodType = input<MethodType | null>(null);

  method:Method|null = null;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const methodType = this.methodType();
    if( methodType ) {
      this.method = getMethod(methodType);
    } else {
      this.method = null;
    }
  }
}
