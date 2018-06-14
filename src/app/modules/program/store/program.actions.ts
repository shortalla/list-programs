import { Action } from '@ngrx/store';
import { ProgramState } from './program.reducer';


export const LIST = '[Actions] List';


export class List implements Action {
	public readonly type = LIST;
	public readonly payload: ProgramState;

	constructor(public program: ProgramState) {
		this.payload = program;
	}
}

export type ProgramAction = List;