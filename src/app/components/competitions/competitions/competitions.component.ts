import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  CompetitionsPageViewModel,
  competitionsPageViewModel,
} from 'store/view-models/competitions-page.view-model';

@Component({
  selector: 'sp-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class CompetitionsComponent {
  private readonly store = inject(Store);
  readonly vm: Signal<CompetitionsPageViewModel> = this.store.selectSignal(
    competitionsPageViewModel
  );
}
