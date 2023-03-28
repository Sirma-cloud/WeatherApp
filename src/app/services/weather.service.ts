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
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  private apiKey = '0270ddccd7bd9080238d1846a247d75c';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
  
}
