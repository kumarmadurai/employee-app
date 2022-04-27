import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Emp } from 'src/app/Models/emp';
import { EmpState } from '../Reducers/emp.reducers';

export const empSelector = createSelector(
  (state: EmpState) => state.emps,
  (emps: ReadonlyArray<Emp>) => emps
);


const routeParams = createSelector(
  (state: EmpState) => state.router.state,
  (state) => state.params
);

const selectRouter = createFeatureSelector<RouterReducerState>('router');

export const {
  selectCurrentRoute, // select the current route
  selectFragment, // select the current route fragment
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = getSelectors(selectRouter);

export const emp = createSelector(
  empSelector,
  routeParams,
  // selectRouteParams,
  (emps: ReadonlyArray<Emp>, { id }) => {
    return emps.filter((m) => m.id === Number(id))[0];
  }
);
