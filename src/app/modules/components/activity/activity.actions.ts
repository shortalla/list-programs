import { Action } from '@ngrx/store';
import { Activity } from './activity.reducer';


export const CREATE = '[Actions] Create';
export const DELETE = '[Actions] Delete';


export class Create implements Action {
	readonly type = CREATE;

	constructor(public activity: Activity) {}
}


export class Delete implements Action {
	readonly type = DELETE;
	
	constructor(public id: number) {}
}

export type ActivityActions
= Create
| Delete;