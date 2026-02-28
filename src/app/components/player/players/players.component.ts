import { ChangeDetectionStrategy, Component, Signal, computed, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlayerDatum, playersPageViewModel } from 'store/view-models/players-page.view-model';
import { InlinePlayerComponent } from '../inline-player/inline-player.component';

export type SortColumn = 'name' | 'totalPoints' | 'totalWins';
export type SortDirection = 'asc' | 'desc';

@Component({
    templateUrl: './players.component.html',
    styleUrl: './players.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [InlinePlayerComponent]
})
export class PlayersComponent {
  private readonly store:Store = inject(Store);

  private readonly rawVm:Signal<{playersData:PlayerDatum[]}> = this.store.selectSignal(playersPageViewModel);

  sortColumn = signal<SortColumn>('name');
  sortDirection = signal<SortDirection>('asc');

  vm = computed(() => {
    const data = this.rawVm();
    const col = this.sortColumn();
    const dir = this.sortDirection();

    const sorted = [...data.playersData].sort((a, b) => {
      let cmp:number;
      switch (col) {
        case 'name':
          cmp = a.player.realName.localeCompare(b.player.realName);
          break;
        case 'totalPoints':
          cmp = a.totalPoints - b.totalPoints;
          break;
        case 'totalWins':
          cmp = a.totalWins - b.totalWins;
          break;
      }
      return dir === 'asc' ? cmp : -cmp;
    });

    return { playersData: sorted };
  });

  sort(column:SortColumn):void {
    if (this.sortColumn() === column) {
      this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortColumn.set(column);
      this.sortDirection.set(column === 'name' ? 'asc' : 'desc');
    }
  }
}
