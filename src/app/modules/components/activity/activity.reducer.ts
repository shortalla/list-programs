import * as actions from './activity.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity'
import { createFeatureSelector } from '@ngrx/store'

export interface Activity {
    id: number;
    name: string;
}

export const activityAdapter = createEntityAdapter<Activity>();
export interface State extends EntityState<Activity> {}


const defaultActivity = {
    ids: [],
    entities: {}
}


export const initialState: State = activityAdapter.getInitialState(defaultActivity);

// Reducer 

export function activityReducer(
    state: State = initialState,
    action: actions.ActivityActions) {

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