import { RouterReducerState } from '@ngrx/router-store';
import {
  createReducer,
  on,
  Action
} from '@ngrx/store';
import { Emp } from 'src/app/Models/emp';
import {
  addEmpsSuccess,
  deleteEmpSuccess,
  getEmpsSuccess,
  updateEmpSuccess,
  searchEmpsSuccess
} from '../Actions/emp.action';

export interface EmpState {
  emps: ReadonlyArray<Emp>;
  router: RouterReducerState<any>;
}

export const initialState: ReadonlyArray<Emp> = [];

export const empReducer = createReducer(
  initialState,
  on(getEmpsSuccess, (state, { emps }) => [...emps]),
  on(searchEmpsSuccess, (state, { filterValue, filterBy }) => {
    const resultData = state.filter(item => {
      const result =  filterBy.map(i => item[i as keyof Emp]?.toString().toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
                      .some(item => item);
      return result;
    });
    return resultData;
  }),

  on(addEmpsSuccess, (state, { emp }) => [...state, emp]),
  on(deleteEmpSuccess, (state, { empId }) =>
    state.filter((emp) => emp.id !== empId)
  ),
  on(updateEmpSuccess, (state, { emp }) => {
    const emps = state.map((m) => {
      if (m.id === emp.id) {
        return emp;
      }
      return m;
    });
    return emps;
  })
);

