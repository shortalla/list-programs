import * as actions from './program.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity'
import { createFeatureSelector } from '@ngrx/store'
import { ProgramModel } from '../models/program.model';

export interface ProgramState {
    id: number;
    activity: ProgramModel;
}

export const programAdapter = createEntityAdapter<ProgramState>();
export interface State extends EntityState<ProgramState> {}


const defaultProgram = {
    ids: [],
    entities: {}
}


export const initialState: State = programAdapter.getInitialState(defaultProgram);



export function programReducer(
    state: State = initialState,
    action: actions.ProgramAction) {

    switch (action.type) {
        case actions.LIST:
            return programAdapter.getSelectors();
            
        default:
            return state;
    }
}


export const getProgramState = createFeatureSelector<State>('program');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = programAdapter.getSelectors(getProgramState);