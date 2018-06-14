import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import * as actions from './program.actions';
import { ApiService } from '../../../core/api/api.service';
import { switchMap } from 'rxjs/operators/switchMap';

@Injectable()
export class ProgramEffects {

	constructor(private actions$: Actions,
							private apiService: ApiService) {}

	@Effect()
	create$ = this.actions$.ofType(actions.LIST).pipe(
    switchMap(
      () => this.apiService.listPrograms()
    )
  );
}