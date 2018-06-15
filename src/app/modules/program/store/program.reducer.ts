import * as actions from './program.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity'
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ProgramModel } from '../models/program.model';

export interface ProgramsState {
  programs: ProgramModel[];
}

export const programsAdapter = createEntityAdapter<ProgramsState>();
export interface State extends EntityState<ProgramsState> {}


const defaultPrograms = {
  programs: [],
}


export const initialState: State = programsAdapter.getInitialState(defaultPrograms);



export function programReducer(
  state: State = initialState,
  action: actions.ProgramAction) {

  switch (action.type) {

    case actions.LOAD_LIST:
      return {
        ...state,
      }

    case actions.LOAD_LIST_SUCCESS:
      const programs = action.payload ? action.payload.programs : [];
      return {
        ...state,
        programs: programs,
      };
    
    case actions.LOAD_LIST_FAIL:
      return {
        ...state,
      };
    
    default:
      return state;
  }
}


export const getProgramsState = createFeatureSelector<ProgramsState>('program');

export const getProgramList = createSelector(getProgramsState, (state: ProgramsState) => state.programs);