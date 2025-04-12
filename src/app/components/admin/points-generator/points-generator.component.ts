import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
  Signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  NgbDate,
  NgbInputDatepicker,
  NgbTypeahead,
} from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Ball } from 'models/ball.model';
import { Competition } from 'models/competition.model';
import { Game } from 'models/game.model';
import { Method } from 'models/method.model';
import { Player } from 'models/player.model';
import { Point } from 'models/point.model';
import { Pokemon } from 'models/pokemon.model';
import { debounceTime, map, Observable, OperatorFunction } from 'rxjs';
import { ballList } from 'src/app/helpers/balls.helper';
import { gameList } from 'src/app/helpers/games.helper';
import { methodList } from 'src/app/helpers/methods.helper';
import { PointActions } from 'store/actions';
import { IPointEntity, Points } from 'store/reducers/points.reducer';
import { v4 as uuid } from 'uuid';
import { CopyToClipboardComponent } from '../../_shared/copy-to-clipboard/copy-to-clipboard.component';
import { DateRangeComponent } from '../../_shared/date-range/date-range.component';
import { InlineCompetitionComponent } from '../../competitions/inline-competition/inline-competition.component';
import { InlinePlayerComponent } from '../../player/inline-player/inline-player.component';
import { InlinePokemonComponent } from '../../pokemon/inline-pokemon/inline-pokemon.component';

@Component({
    selector: 'sp-points-generator',
    templateUrl: './points-generator.component.html',
    styleUrls: ['./points-generator.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        InlineCompetitionComponent,
        InlinePlayerComponent,
        InlinePokemonComponent,
        ReactiveFormsModule,
        NgbTypeahead,
        NgbInputDatepicker,
        DateRangeComponent,
        CopyToClipboardComponent,
    ]
})
export class PointsGeneratorComponent implements OnInit {
  @Input() allPokemon: Pokemon[] = [];
  @Input() competitions: Competition[] = [];
  @Input() currentCompetition: Competition | null = null;
  @Input() players: Player[] = [];

  private readonly store: Store = inject(Store);
  private readonly fb: FormBuilder = inject(FormBuilder);

  newPoints: Signal<Point[]> = this.store.selectSignal(
    Points.selectPendingPoints
  );

  p: Point | null = null;

  ballList: Ball[] = ballList;
  gameList: Game[] = gameList;
  methodList: Method[] = methodList;

  pointForm = this.fb.group({
    ball: [null],
    catchDate: this.fb.control<NgbDate | null>(null, [Validators.required]),
    competition: this.fb.control<Competition | null>(null, [
      Validators.required,
    ]),
    firstCatch: [false],
    game: [null],
    method: [null],
    player: this.fb.control<Player | null>(null, [Validators.required]),
    pokemon: this.fb.control<Pokemon | null>(null, [Validators.required]),
  });

  ngOnInit(): void {
    const date: NgbDate = new NgbDate(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      new Date().getDate()
    );

    this.pointForm.patchValue({
      catchDate: date,
      competition: this.currentCompetition,
    });
  }

  createPoint() {
    const point: IPointEntity = this.createPointFromValues();

    this.store.dispatch(PointActions.add({ point }));
  }

  trackByFn(index: number, point: Point) {
    return point.id;
  }

  competitionInputFormatter = (competition: Competition) => competition.theme;
  competitionSearch: OperatorFunction<string, readonly Competition[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      map((term) =>
        term === ''
          ? this.competitions
          : this.competitions
              .filter(
                (competition) =>
                  competition.theme.toLowerCase().indexOf(term.toLowerCase()) >
                  -1
              )
              .slice(0, 10)
      )
    );

  playerInputFormatter = (player: Player) => player.formattedName;
  playerSearch: OperatorFunction<string, readonly Player[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      map((term) =>
        term === ''
          ? this.players
          : this.players
              .filter(
                (player) =>
                  player.formattedName
                    .toLowerCase()
                    .indexOf(term.toLowerCase()) > -1
              )
              .slice(0, 10)
      )
    );

  pokemonInputFormatter = (pokemon: Pokemon) => pokemon.name;
  pokemonSearch: OperatorFunction<string, readonly Pokemon[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      map((term) =>
        term === ''
          ? this.allPokemon
          : this.allPokemon
              .filter(
                (pokemon) =>
                  pokemon.name.toLowerCase().indexOf(term.toLowerCase()) > -1
              )
              .slice(0, 10)
      )
    );

  private createPointFromValues() {
    let catchDate: string | null = null;
    if (this.pointForm.value.catchDate) {
      const year = String(this.pointForm.value.catchDate.year);
      const month = String(this.pointForm.value.catchDate.month);
      const day = String(this.pointForm.value.catchDate.day);
      catchDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
    return {
      data: {
        id: uuid(),
        type: 'point' as 'point',
        attributes: {
          ball: this.pointForm.value.ball || null,
          catchDate: catchDate,
          firstCatch: !!this.pointForm.value.firstCatch,
          game: this.pointForm.value.game || null,
          method: this.pointForm.value.method || null,
          oldSystemPoint: false,
        },
        relationships: {
          competition: {
            data: {
              id: this.pointForm.value.competition!.id,
              type: 'competition',
            },
          },
          pokemon: {
            data: {
              id: this.pointForm.value.pokemon!.id,
              type: 'pokemon',
            },
          },
          player: {
            data: {
              id: this.pointForm.value.player!.id,
              type: 'player',
            },
          },
        },
      },
    };
  }
}
