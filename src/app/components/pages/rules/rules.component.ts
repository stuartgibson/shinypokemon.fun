import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sp-rules',
    templateUrl: './rules.component.html',
    styleUrls: ['./rules.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgbPopover]
})
export class RulesComponent {

}
