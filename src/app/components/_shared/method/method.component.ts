import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { getMethod } from 'src/app/helpers/methods.helper';
import { MethodType } from 'types/method.types';

@Component({
    selector: 'sp-method',
    templateUrl: './method.component.html',
    styleUrl: './method.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MethodComponent {
  readonly methodType = input<MethodType | null>(null);
  readonly method = computed(() => {
    const mt = this.methodType();
    return mt ? getMethod(mt) : null;
  });
}
