import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'sp-competition-generator',
  templateUrl: './competition-generator.component.html',
  styleUrls: ['./competition-generator.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetitionGeneratorComponent {

  constructor(
    private store:Store
  ){

  }
}
