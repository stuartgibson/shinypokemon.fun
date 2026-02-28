import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Competitions } from "store/reducers";

// Redirects to the current competition or the /competitions
// page if there is no current competition
export const CurrentCompetitionGuard: CanActivateFn = () => {
    const store = inject(Store);
    const router = inject(Router);
    const competition = store.selectSignal(Competitions.selectCurrentCompetition)();

    if (competition) {
      return router.createUrlTree(['/competitions', competition.id]);
    }

    return router.createUrlTree(['/competitions']);
  };
