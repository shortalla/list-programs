import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import * as actions from './activity.actions';
import { ApiService } from '../../../core/api/api.service';
import { switchMap } from 'rxjs/operators/switchMap';
import { ActivityModel } from '../models/activity.model';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { ActivityService } from '../services/activity.service';

@Injectable()
export class ActivityEffects {

	constructor(private actions$: Actions,
							private activityService: ActivityService) {}

	@Effect()
  create$: Observable<Action> = this.actions$.ofType(actions.CREATE)
    .map(action => {
      console.log(action);
      return new actions.CreateSuccess();
    }
  );
    

  @Effect()
  delete$: Observable<Action> = this.actions$.ofType(actions.DELETE)
    .map(action => {
      console.log(action);
      return new actions.DeleteSuccess();
    }
  );
}