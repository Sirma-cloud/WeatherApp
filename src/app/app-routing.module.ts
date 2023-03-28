import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WeatherAppComponent } from 'src/weather-app/weather-app.component';
// import { FiveDayForecastComponent } from './five-day-forecast/five-day-forecast.component';


  const routes: Routes = [
    { path: 'weather-app', component: WeatherAppComponent },]
  // { path: 'five-day-forecast', component: FiveDayForecastComponent },]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
 