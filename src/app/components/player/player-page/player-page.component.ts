import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlayerPageViewModel, playerPageViewModel } from 'store/view-models/player-page.view-model';
import { PointComponent } from "../../point/point.component";
import { InlinePlayerComponent } from '../inline-player/inline-player.component';
import { InlinePokemonComponent } from '../../pokemon/inline-pokemon/inline-pokemon.component';
import { DateRangeComponent } from "../../_shared/date-range/date-range.component";
import { formatDateTime } from "../../../helpers/dates.helper";

@Component({
    templateUrl: './player-page.component.html',
    styleUrl: './player-page.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PointComponent, InlinePlayerComponent, InlinePokemonComponent, DateRangeComponent]
})
export class PlayerPageComponent {
  private readonly store:Store = inject(Store);

  vm:Signal<PlayerPageViewModel> = this.store.selectSignal(playerPageViewModel);

  dateFormatted = (date:Date):string|null =>
    formatDateTime(date)


}
