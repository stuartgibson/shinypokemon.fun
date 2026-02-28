import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sp-rules',
    templateUrl: './rules.component.html',
    styleUrl: './rules.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgbPopover]
})
export class RulesComponent {

}
