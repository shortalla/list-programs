import * as actions from './program.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity'
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ProgramModel } from '../models/program.model';

export interface ProgramsState {
  ids: [1],
  entities: ProgramModel[]
}

export const programsAdapter = createEntityAdapter<ProgramsState>();
export interface State extends EntityState<ProgramsState> {}


const defaultPrograms = {
  ids: [],
  entities: [
    new ProgramModel(3, 'Test 1'),
    new ProgramModel(6, 'Test 2'),
    new ProgramModel(20, 'Test 3'),
    new ProgramModel(32, 'Test 4'),
    new ProgramModel(334, 'Test 5'),
  ],
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
      let ids = action.payload ? action.payload.ids : [];
      let entities = action.payload ? action.payload.entities : [];
      return {
        ...state,
        ids: ids,
        entities: entities,
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

export const getProgramList = createSelector(getProgramsState, (state: ProgramsState) => state.entities);