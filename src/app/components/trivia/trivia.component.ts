import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MostCaughtComponent } from "./most-caught/most-caught.component";
import { NotCaughtComponent } from "./not-caught/not-caught.component";
import { MostWinsComponent } from "./most-wins/most-wins.component";
import { MostPointsComponent } from "./most-points/most-points.component";

@Component({
    selector: 'sp-trivia',
    templateUrl: './trivia.component.html',
    styleUrls: ['./trivia.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MostCaughtComponent, NotCaughtComponent, MostWinsComponent, MostPointsComponent]
})
export class TriviaComponent {

}
