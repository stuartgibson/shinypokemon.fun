import { ChangeDetectionStrategy, Component, inject, Input, Signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgbDate, NgbTypeahead, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Player } from 'models/player.model';
import { debounceTime, map, Observable, OperatorFunction } from 'rxjs';
import { CompetitionActions } from 'store/actions/competition.actions';
import { Competitions, ICompetitionEntity } from 'store/reducers';
import { v4 as uuid } from 'uuid';

@Component({
    selector: 'sp-competition-generator',
    templateUrl: './competition-generator.component.html',
    styleUrls: ['./competition-generator.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ReactiveFormsModule, NgbTypeahead, NgbInputDatepicker]
})
export class CompetitionGeneratorComponent {
  @Input() players: Player[] = [];

  private readonly store:Store = inject(Store);
  private readonly fb:FormBuilder = inject(FormBuilder);

  newCompetition:Signal<Competition|null> = this.store.selectSignal(Competitions.selectNewCompetition);

  competitionForm = this.fb.group({
    description: [''],
    endDate: this.fb.control<NgbDate | null>(null, [Validators.required]),
    selectedBy: this.fb.control<Player | null>(null, [Validators.required]),
    startDate: this.fb.control<NgbDate | null>(null, [Validators.required]),
    theme: [''],
    yearID: ['']
  });

  ngOnInit(): void {
    const date:NgbDate = new NgbDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate());

    this.competitionForm.patchValue({
      yearID: String(new Date().getFullYear())
    });
  }

  createCompetition() {
    const competition:ICompetitionEntity = this.createCompetitionFromValues();

    this.store.dispatch(
      CompetitionActions.add({ competition })
    )
  }

  playerInputFormatter = (player:Player) => player.formattedName;
  playerSearch: OperatorFunction<string, readonly Player[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			map((term) =>
				term === ''
					? this.players
					: this.players.filter((player) => player.formattedName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
		);

  private createCompetitionFromValues():ICompetitionEntity {
    let startDate:string|null = null;
    let endDate:string|null = null;

    if(this.competitionForm.value.startDate){
      const year = String(this.competitionForm.value.startDate.year);
      const month = String(this.competitionForm.value.startDate.month);
      const day = String(this.competitionForm.value.startDate.day);
      startDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
    if(this.competitionForm.value.endDate){
      const year = String(this.competitionForm.value.endDate.year);
      const month = String(this.competitionForm.value.endDate.month);
      const day = String(this.competitionForm.value.endDate.day);
      endDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }

    return {
      data: {
        type: 'competition',
        id: uuid(),
        attributes: {
          description: this.competitionForm.value.description || '',
          endDate: endDate || '',
          startDate: startDate || '',
          theme: this.competitionForm.value.theme || '',
        },
        relationships: {
          selectedBy: {
            data: {
              id: this.competitionForm.value.selectedBy!.id,
              type: 'player'
            }
          },
          validPokemon: [],
          year: {
            data: {
              id: this.competitionForm.value.yearID!,
              type: 'year'
            }
          }
        }
      }
    }
  }
}
