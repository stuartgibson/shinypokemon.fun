import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'sp-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class FooterComponent {

}
