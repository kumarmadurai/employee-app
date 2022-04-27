import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Emp } from '../Models/emp';
import { EmpState } from '../Store/Reducers/emp.reducers';
import { emp } from '../Store/Selector/emp.selector';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css'],
})
export class EmpComponent implements OnInit {
  emp$ = this.store.pipe(select(emp));
  constructor(private store: Store<EmpState>) {}

  ngOnInit(): void {}
}
