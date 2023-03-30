import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-five-day-forecast',
  templateUrl: './five-day-forecast.component.html',
  styleUrls: ['./five-day-forecast.component.css']
})
export class FiveDayForecastComponent implements OnInit {
  city = 'Eldoret'; // default city
  // units: string = 'metric';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getForecast();
  }

  getForecast() {
    this.weatherService.geForecast(this.city).subscribe((data) => {
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