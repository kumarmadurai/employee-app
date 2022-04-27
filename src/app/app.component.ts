import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Emp } from './Models/emp';
import {
  addEmps,
  getEmps
} from './Store/Actions/emp.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  emps: Emp[] = [];
  newEmp: Emp = new Emp();
  title = 'empDeviceApp';
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getAllEmp();
  }

  getAllEmp(): void {
    this.store.dispatch(getEmps());
  }

  addNewEmps(): void {
    this.store.dispatch(addEmps(this.newEmp));
    this.newEmp = new Emp();

  }
}
