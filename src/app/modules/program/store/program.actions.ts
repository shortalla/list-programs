import { Action } from '@ngrx/store';
import { ProgramModel } from '../models/program.model';


export const LOAD_LIST = '[Programs] Load list';
export const LOAD_LIST_SUCCESS = '[Programs] Load list success';
export const LOAD_LIST_FAIL = '[Programs] Load list fail';


export class LoadList implements Action {
	public readonly type = LOAD_LIST;
	constructor() {}
}

export class LoadListSuccess implements Action {
	public readonly type = LOAD_LIST_SUCCESS;

	constructor(public payload: {programs: ProgramModel[]}) {}
}

export class LoadListFail implements Action {
	public readonly type =  LOAD_LIST_FAIL;

	constructor(public payload: any) {}
}

export type ProgramAction = LoadList | LoadListSuccess | LoadListFail;