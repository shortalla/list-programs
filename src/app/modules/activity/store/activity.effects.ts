import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import * as actions from './activity.actions';
import { ApiService } from '../../../core/api/api.service';
import { switchMap } from 'rxjs/operators/switchMap';
import { ActivityModel } from '../models/activity.model';

@Injectable()
export class ActivityEffects {

	constructor(private actions$: Actions,
							private apiService: ApiService) {}

	@Effect()
	create$ = this.actions$.ofType(actions.CREATE).pipe(
    switchMap(
      () => this.apiService.addActivity(94, new ActivityModel('VDS', null, null))
    )
  );

  @Effect()
	delete$ = this.actions$.ofType(actions.DELETE).pipe(
    switchMap(
      () => this.apiService.deleteActivity(5)
    )
  );
}