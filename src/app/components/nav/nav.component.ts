import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'sp-nav',
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink]
})
export class NavComponent {

}
