import { createAction, props } from '@ngrx/store';
import { Emp } from '../../Models/emp';

export const getEmps = createAction('[Emp] Get employee');
export const getEmpsSuccess = createAction(
  '[Emp] Get employee success',
  (emps: ReadonlyArray<Emp>) => ({ emps })
);

export const searchEmps = createAction('[Emp] search employee',
(filterValue: string, filterBy: string[]) => ({ filterValue, filterBy })
);
export const searchEmpsSuccess = createAction(
  '[Emp] search employee success',
  (filterValue: string, filterBy: string[]) => ({ filterValue, filterBy })
);
export const addEmps = createAction(
  '[Emp] Add Employee',
  (emp: Emp) => ({ emp })
);
export const addEmpsSuccess = createAction(
  '[Emp] Add Employee success',
  (emp: Emp) => ({ emp })
);

export const deleteEmp = createAction(
  '[Emp] Delete Employee',
  (empId: number) => ({ empId })
);

export const deleteEmpSuccess = createAction(
  '[Emp] Delete Employee success',
  (empId: number) => ({ empId })
);

export const updateEmp = createAction(
  '[Emp] Update Employee',
  (emp: Emp) => ({ emp })
);

export const updateEmpSuccess = createAction(
  '[Emp] Update Employee success',
  (emp: Emp) => ({ emp })
);

