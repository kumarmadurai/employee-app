import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Emp } from '../Models/emp';
import {
  addEmps,
  getEmps,
  searchEmps
} from '../Store/Actions/emp.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  emps: Emp[] = [];
  newEmp: Emp = new Emp();
  title = 'empDeviceApp';
  search: string;
  empForm =new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    type: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)])
  });
  searchControl = new FormControl('');
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getAllEmps();
    this.searchControl.valueChanges.subscribe(item => {
      this.searchEmps(item, ['name', 'type', 'description']);
    })
  }
  get name() {
    return this.empForm.get('name');
  }
  get email() {
    return this.empForm.get('email');
  }
  get type() {
    return this.empForm.get('type');
  }
  get description() {
    return this.empForm.get('description');
  }

  getAllEmps(): void {
    this.store.dispatch(getEmps());
  }
  searchEmps(filterValue: string, filterBy: string[]): void {
    this.store.dispatch(searchEmps(filterValue, filterBy));
  }

  addNewEmps(): void {
    this.store.dispatch(addEmps(this.newEmp));
    this.newEmp = new Emp();
  }

}
