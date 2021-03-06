import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import * as actions from './program.actions';
import { ApiService } from '../../../core/api/api.service';
import { switchMap } from 'rxjs/operators/switchMap';
import { ProgramModel } from '../models/program.model';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';


@Injectable()
export class ProgramEffects {

	constructor(private actions$: Actions,
							private apiService: ApiService) {}

	@Effect()
	loadList$: Observable<Action> = this.actions$.ofType(actions.LOAD_LIST).pipe(
    switchMap(() => {
      return this.apiService.listPrograms().pipe().map(data => {
        const programs = data.map(program => ProgramModel.fromJson(program));
        return new actions.LoadListSuccess({programs});
      });
    })
  );
}