import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Emp } from '../Models/emp';
import { deleteEmp, updateEmp } from '../Store/Actions/emp.action';
import { EmpState } from '../Store/Reducers/emp.reducers';
import {
  empSelector,
} from '../Store/Selector/emp.selector';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
})
export class EmpListComponent implements OnInit, OnDestroy {
  emp$ = this.store.pipe(select(empSelector));
  emps: Emp[];
  done = new Subject();
  selectedIndex: number = null;
  name = '';
  email = '';
  type = '';
  description = '';

  constructor(private store: Store<EmpState>) {}

  ngOnInit(): void {
    this.emp$
      .pipe(takeUntil(this.done))
      .subscribe((data) => (this.emps = JSON.parse(JSON.stringify(data))));
  }

  enableEdit(emp: Emp, index: number): void {
    this.selectedIndex = index;
    this.name = emp.name;
    this.email = emp.email;
    this.type = emp.type;
    this.description = emp.description;

  }

  cancelEdit(): void {
    this.selectedIndex = null;
  }

  // update the earning from the input then dispatch update action
  update(emp: Emp): void {
    console.log(emp);
    const m = { ...emp };
    m.name = this.name;
    m.email = this.email;
    m.type = this.type;
    m.description = this.description;
    // dispatch action to update
    this.store.dispatch(updateEmp(m));
    this.selectedIndex = null;
  }

  deleteEmp(empId: number): void {
    this.store.dispatch(deleteEmp(empId));
  }

  ngOnDestroy(): void {
    this.done.next();
    this.done.complete();
  }
}
