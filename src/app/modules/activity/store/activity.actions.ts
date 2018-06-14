import { Action } from '@ngrx/store';
import { ActivityState } from './activity.reducer';


export const CREATE = '[Actions] Create';
export const DELETE = '[Actions] Delete';


export class Create implements Action {
	public readonly type = CREATE;
	public readonly payload: ActivityState;

	constructor(public activity: ActivityState) {
		this.payload = activity;
	}
}


export class Delete implements Action {
	public readonly type = DELETE;
	public readonly payload: number;
	
	constructor(public id: number) {
		this.payload = id;
	}
}

export type ActivityAction = Create | Delete;