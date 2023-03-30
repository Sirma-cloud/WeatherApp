import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css'],
})
export class WeatherAppComponent implements OnInit {
  city = 'Eldoret'; // default city
  units='metric';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.weatherData = data;
      console.log(this.weatherData); // log the data to the console
    });
  }

    search() {
      this.weatherService.getWeather(this.city)
        .subscribe(data => {
          this.weatherData = data;
        });
  }
}

// import { Component, OnInit } from '@angular/core';
// import { ActivityService } from 'src/app/services/activity.service';
// import { WeatherService } from 'src/app/services/weather.service';

// @Component({
//   selector: 'app-weather-app',
//   templateUrl: './weather-app.component.html',
//   styleUrls: ['./weather-app.component.css'],
// })
// export class WeatherAppComponent implements OnInit {
//   myWeather: any;
//   temperature: number = 0;
//   feelsLikeTemp: number = 0;
//   humidity: number = 0;
//   pressure: number = 0;
//   summary: string = '';
//   iconURL: string = ';';
//   city: string = 'ELdoret';
//   units: string = 'metric';
//   errorMessage: any;
//   myactivity: any;
//   activity: any;

//   constructor(private weatherService: WeatherService) {}

//   ngOnInit(): void {
//     this.weatherService.getWeather(this.city,).subscribe({
//       next: (res) => {
//         console.log('This is the weather', res);
//         this.myWeather = res;
//         console.log(this.myWeather);
//         this.temperature = this.myWeather.main.temp;
//         this.feelsLikeTemp = this.myWeather.main.feels_like;
//         this.humidity = this.myWeather.main.humidity;
//         this.pressure = this.myWeather.main.pressure;
//         this.summary = this.myWeather.weather[0].main;
//         this.city = '';

//         this.iconURL =
//           'https://openweathermap.org/img/wn/' +
//           this.myWeather.weather[0].icon +
//           '@2x.png';
//       },
//       error: (error) => {
//         this.errorMessage = error.message;
//         console.error('There was an error!', error);
//       },
//     });
//   }
// }


  // This is a search functionality to change city name
//   onSubmit() {
//     this.getWeather(this.cityName);
//     this.cityName = '';
//   }
//   private getWeather(cityName: string) {
//     this.weatherService.getWeather(cityName, this.units).subscribe({
//       next: (res) => {
//         this.myWeather = res;
//         console.log(res);
//       },
//     });
//   }
// }

//     // this.getactivity
//       this.activityService.getActivity().subscribe({
//       next: (res) => {
//         // console.log("my act res logged here..", res);
//         this.myactivity=res;
//         console.log("my activities logged here..", this.myactivity);
//         this.activity= this.myactivity.action;
//       },
//     });

//   }
// }
// this.activityService.getActivit(1).subscribe({
//   next: (res) => {
//     console.log("my gf by id.", res);
//     this.myactivity=res;
//     console.log("my activities logged here..", this.myactivity);
//     this.activity= this.myactivity.action;
// },
// })
// GET activity by id from the server
// getActivity(id: number): Observable<any> {
// const url = `${this.url}/activity`;
//   return this.http.get<any>(url)
//     .pipe(
//       tap(activity => console.log(`fetched activity id = ${id}`, activity)),
//       catchError(this.handleError<any>(`getActivity id=${id}`))
// ):
