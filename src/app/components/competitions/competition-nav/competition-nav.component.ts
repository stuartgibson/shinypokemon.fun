import { Component } from '@angular/core';
import { PreviousYearsComponent } from '../../years/previous-years/previous-years.component';
import { CurrentYearComponent } from '../../years/current-year/current-year.component';

@Component({
    selector: 'sp-competition-nav',
    templateUrl: './competition-nav.component.html',
    styleUrl: './competition-nav.component.sass',
    imports: [CurrentYearComponent, PreviousYearsComponent]
})
export class CompetitionNavComponent {

}
