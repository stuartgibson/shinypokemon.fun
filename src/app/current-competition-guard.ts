import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, take } from "rxjs";
import { inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Competitions } from "store/reducers";
import { Competition } from "models/competition.model";

// Redirects to the current competition or the /competitions
// page if there is no current competition
export const CurrentCompetitionGuard : CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  
    const store:Store = inject(Store);
    const competition: Observable<Competition | null> = store.select(Competitions.selectCurrentCompetition);
    const url:String[] = ['/competitions'];
    const subscription = competition.pipe(take(1)).subscribe(competition => {
      if (!!competition) {
        url.push(competition.id);
      }
    });
    subscription.unsubscribe();

    const router:Router = inject(Router);
    router.navigate(url);
    
    return true;
  };