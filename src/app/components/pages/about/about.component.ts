import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'sp-about',
    templateUrl: './about.component.html',
    styleUrl: './about.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {

}
