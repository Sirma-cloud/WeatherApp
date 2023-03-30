// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class WeatherService {

//   constructor(private http: HttpClient) { }

//   getWeather(cityName:string,units:string) {
//     return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' +cityName+ '&appid=0270ddccd7bd9080238d1846a247d75c&units='+units);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = '0270ddccd7bd9080238d1846a247d75c';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}weather?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
  geForecast(city: string): Observable<any> {
    const url = `${this.apiUrl}forecast?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Unknown city, try a different name');
  }
}
