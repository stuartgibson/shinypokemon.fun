import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Competition } from 'models/competition.model';

@Component({
  selector: 'sp-current-competition',
  templateUrl: './current-competition.component.html',
  styleUrls: ['./current-competition.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentCompetitionComponent {
  currentCompetition = new Competition({
    description: 'This is a description',
    endDate: new Date('2023-01-14'),
    startDate: new Date('2023-01-01'),
    theme: 'Catch a Pokémon',
    validPokemonIDs: ['1', '2', '3']
  });
}
