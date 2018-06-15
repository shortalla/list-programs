import { Action } from '@ngrx/store';
import { ActivityState } from './activity.reducer';


export const CREATE = '[Actions] Create';
export const CREATE_SUCCESS = '[Actions] CreateSuccess';
export const CREATE_FAIL = '[Actions] CreateFail';

export const DELETE = '[Actions] Delete';
export const DELETE_SUCCESS = '[Actions] DeleteSuccess';
export const DELETE_FAIL = '[Actions] DeleteFail';


export class Create implements Action {
	public readonly type = CREATE;

	constructor(public payload: ActivityState) {}
}

export class CreateSuccess implements Action {
	public readonly type = CREATE_SUCCESS;
	
	constructor() {}
}

export class CreateFail implements Action {
	public readonly type = CREATE_FAIL;
	
	constructor(public payload: any) {}
}

export class Delete implements Action {
	public readonly type = DELETE;
	
	constructor(public payload: {id: number}) {}
}

export class DeleteSuccess implements Action {
	public readonly type = DELETE_SUCCESS;
	
	constructor() {}
}

export class DeleteFail implements Action {
	public readonly type = DELETE_FAIL;
	
	constructor(public payload: any) {}
}

export type ActivityAction
= Create 
| CreateSuccess 
| CreateFail 
| Delete 
| DeleteSuccess
| DeleteFail;