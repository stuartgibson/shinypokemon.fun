import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  trophySeasonsPageViewModel,
  TrophySeasonsPageViewModel,
} from 'store/view-models/trophy-seasons-page.view-model';

@Component({
  selector: 'sp-trophy-seasons',
  templateUrl: './trophy-seasons.component.html',
  styleUrls: ['./trophy-seasons.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class TrophySeasonsComponent {
  private readonly store = inject(Store);
  readonly vm: Signal<TrophySeasonsPageViewModel> = this.store.selectSignal(
    trophySeasonsPageViewModel
  );
}
