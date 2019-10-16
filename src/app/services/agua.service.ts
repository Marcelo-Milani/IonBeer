import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { Agua } from './../models/agua';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AguaService {

   // API path
   base_path = 'http://localhost:3000/aguas';

   constructor(private http: HttpClient) { }
 
   // Http Options
   httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
   }
 
   // Handle API errors
   handleError(error: HttpErrorResponse) {
     if (error.error instanceof ErrorEvent) {
       // A client-side or network error occurred. Handle it accordingly.
       console.error('An error occurred:', error.error.message);
     } else {
       // The backend returned an unsuccessful response code.
       // The response body may contain clues as to what went wrong,
       console.error(
         `Backend returned code ${error.status}, ` +
         `body was: ${error.error}`);
     }
     // return an observable with a user-facing error message
     return throwError(
       'Something bad happened; please try again later.');
   };
 
 
   // Create a new item
   createItem(item): Observable<Agua> {
     return this.http.post<Agua>(this.base_path, JSON.stringify(item), this.httpOptions)
       .pipe(
         retry(2),
         catchError(this.handleError)
       )
   }
 
   // Get single Lupulo data by ID
   getItem(id): Observable<Agua> {
     return this.http
       .get<Agua>(this.base_path + '/' + id)
       .pipe(
         retry(2),
         catchError(this.handleError)
       )
   }
 
   // Get Agua data
   getList(): Observable<Agua> {
     return this.http
       .get<Agua>(this.base_path)
       .pipe(
         retry(2),
         catchError(this.handleError)
       )
   }
 
   // Update item by id
   updateItem(id, item): Observable<Agua> {
     return this.http
       .put<Agua>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
       .pipe(
         retry(2),
         catchError(this.handleError)
       )
   }
 
   // Delete item by id
   deleteItem(id) {
     return this.http
       .delete<Agua>(this.base_path + '/' + id, this.httpOptions)
       .pipe(
         retry(2),
         catchError(this.handleError)
       )
   }
}
