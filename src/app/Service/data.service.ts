import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Emp } from '../Models/emp';
import { catchError, delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'api/emps/';
  constructor(private http: HttpClient) {}

  getEmps(): Observable<ReadonlyArray<Emp>> {
    return this.http.get<ReadonlyArray<Emp>>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  searchEmps(filterValue: string, filterBy: string[]): Observable<Emp> {
    return this.http.get<Emp>(`${this.url}?searchString=${filterValue}&filterBy=${filterBy}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  addEmps(emp: Emp): Observable<Emp> {
    return this.http.post<Emp>(this.url, emp).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  deleteEmp(empId: number) {
    return this.http.delete(`${this.url}/${empId}`).pipe(
      delay(2000),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  updateEmp(emp: Emp): Observable<Emp> {
    return this.http.put<Emp>(`${this.url}/${emp.id}`, emp).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
