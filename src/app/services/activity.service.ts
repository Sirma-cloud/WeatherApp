import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  getActivity() {
    return this.http.get<any>('http://localhost:8080/activity');
  }
}

// export class ActivityService {

//   url = 'http://localhost:8080'
//   activity: any;

//   constructor(private http: HttpClient) {

//   }

//   // GET all the activities from the server
//   getActivity(): Observable<any[]> {
//     const url = `${this.url}/activity`;
//     return this.http.get<any[]>(url)
//       .pipe(
//         tap(action => console.log(`fetched activities`, action)),
//         catchError(this.handleError<any>(`getAllActivities`))
//       );
//   }

//   // GET activity by id from the server
//   getActivit(id: number): Observable<any> {
//     const url = `${this.url}/activity`;
//     return this.http.get<any>(url)
//       .pipe(
//         tap(activity => console.log(`fetched activity id = ${id}`, activity)),
//         catchError(this.handleError<any>(`getActivity id=${id}`))
//       );
//   }

//   // PUT: update activity on the server by id
//   updateActivity(activity: any): Observable<any> {
//     const url = `${this.url}/activity/${activity.id}`;
//     const httpOptions = {
//       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//     };
//     return this.http.put(url, activity, httpOptions)
//       .pipe(
//         tap(updatedActivity => console.log(`updatedActivity activity id=${activity.id}`, updatedActivity)),
//         catchError(this.handleError<any>(`updatedActivity`))
//       );
//   }


//   // POST: add a new mood to the server
//   insertActivity(activity: any): Observable<any> {
//     const url = `${this.url}/activities`;
//     console.log('wobble activity', activity);
//     const httpOptions = {
//       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//     };
//     return this.http.post<any>(url, activity, httpOptions)
//       .pipe(
//         tap((newActivity) => console.log(`inserted activity id=$newActivity.id`)),
//         catchError(this.handleError<any>('inserted Activity'))
//       );
//   }

//   // DELETE amood from the server by id
//   deleteActivity(id: number): Observable<any> {
//     const url = `${this.url}/activities/${id}`;
//     return this.http.delete<any>(url)
//       .pipe(
//         catchError(this.handleError<any>(`deletedActivity`))
//       );
//   }

//   public handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//       console.log(`${operation} failed: ${error.message}`);
//       return of(result as T);
//     };
//   }
// }