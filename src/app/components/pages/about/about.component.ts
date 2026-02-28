import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'sp-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {

}
