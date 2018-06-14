import * as actions from './activity.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity'
import { createFeatureSelector } from '@ngrx/store'
import { ActivityModel } from '../models/activity.model';

export interface ActivityState {
    id: number;
    activity: ActivityModel;
}

export const activityAdapter = createEntityAdapter<ActivityState>();
export interface State extends EntityState<ActivityState> {}


const defaultActivity = {
    ids: [],
    entities: {}
}


export const initialState: State = activityAdapter.getInitialState(defaultActivity);



export function activityReducer(
    state: State = initialState,
    action: actions.ActivityAction) {

    switch (action.type) {
        case actions.CREATE:
            return activityAdapter.addOne(action.activity, state);

        case actions.DELETE:
            return activityAdapter.removeOne(action.id, state);
        
        default:
            return state;
    }
}


export const getActivityState = createFeatureSelector<State>('activity');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = activityAdapter.getSelectors(getActivityState);