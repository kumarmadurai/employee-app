import { routerReducer } from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  INIT,
  MetaReducer,
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import {
  empReducer,
  EmpState,
} from './Reducers/emp.reducers';

export const reducers: ActionReducerMap<EmpState> = {
  emps: empReducer,
  router: routerReducer
};

const debugMeta = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
};


export const metaReducers: MetaReducer<EmpState>[] = !environment.production
  ? [debugMeta]
  : [];
