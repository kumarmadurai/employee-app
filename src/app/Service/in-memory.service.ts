import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Emp } from '../Models/emp';

@Injectable({
  providedIn: 'root',
})
export class InMemoryService implements InMemoryDbService {
  constructor() {}

  createDb() {
    return {
      emps: this.mockEmps(),
    };
  }

  private mockEmps(): Emp[] {
    const emp = new Emp(
      'Kumar dhanasamy',
      'marikumar01@gmail.com',
      'Labtop',
      'Sytem manager'
    );
    emp.id = 1;

    const emp1 = new Emp(
      'yashar',
      'yashar@gmail.com',
      'Type writer',
      'Typiest'
    );
    emp1.id = 2;

    const emp2 = new Emp(
      'vijay',
      'vijay@gmail.com',
      'Desktop',
      'Normal worker'
    );
    emp2.id = 3;

    const emps = [emp, emp1, emp2];
    return emps;
  }
}
