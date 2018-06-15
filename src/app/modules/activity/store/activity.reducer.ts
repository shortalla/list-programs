import * as actions from './activity.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity'
import { createFeatureSelector, createSelector } from '@ngrx/store'

export interface ActivityState {
  programId: number;
  name: string;
  startDate?: Date;
  endDate?: Date;
}

export const activityAdapter = createEntityAdapter<ActivityState>();
export interface State extends EntityState<ActivityState> {}


export const initialState: State = activityAdapter.getInitialState();



export function activityReducer(
  state: State = initialState,
  action: actions.ActivityAction) {

  switch (action.type) {
    case actions.CREATE:
      return activityAdapter.addOne(action.payload, state);

    case actions.DELETE:
      return activityAdapter.removeOne(action.payload.id, state);
    
    default:
      return state;
  }
}


export const getActivityState = createFeatureSelector<ActivityState>('activity');

export const getActivity = createSelector(getActivityState, (state: ActivityState) => state);