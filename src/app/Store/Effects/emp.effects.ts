import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY, EmptyError } from 'rxjs';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  tap,
} from 'rxjs/operators';
import { DataService } from 'src/app/Service/data.service';
import {
  getEmps,
  getEmpsSuccess,
  addEmps,
  addEmpsSuccess,
  deleteEmp,
  deleteEmpSuccess,
  updateEmp,
  updateEmpSuccess,
  searchEmpsSuccess,
  searchEmps
} from '../Actions/emp.action';

@Injectable()
export class EmpEffects {
  loadEmp$ = createEffect(() =>
    this.action$.pipe(
      ofType(getEmps),
      exhaustMap(() =>
        this.dataService.getEmps().pipe(
          map((emps) => getEmpsSuccess(emps)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  searchEmp$ = createEffect(() =>
  this.action$.pipe(
    ofType(searchEmps),
    exhaustMap(({ filterValue, filterBy }) =>
      this.dataService.searchEmps(filterValue, filterBy).pipe(
        map(() => searchEmpsSuccess(filterValue, filterBy)),
        catchError(() => EMPTY)
      )
    )
  )
);

  addEmp$ = createEffect(() =>
    this.action$.pipe(
      ofType(addEmps),
      tap((emp) => console.log(emp)),
      concatMap(({ emp }) =>
        this.dataService.addEmps(emp).pipe(
          map((newEmp) => addEmpsSuccess(newEmp)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteEmp$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteEmp),
      mergeMap(({ empId }) =>
        this.dataService.deleteEmp(empId).pipe(
          map(() => deleteEmpSuccess(empId)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateEmp$ = createEffect(() =>
    this.action$.pipe(
      ofType(updateEmp),
      concatMap(({ emp }) =>
        this.dataService.updateEmp(emp).pipe(
          map(() => updateEmpSuccess(emp)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private action$: Actions, private dataService: DataService) {}
}
