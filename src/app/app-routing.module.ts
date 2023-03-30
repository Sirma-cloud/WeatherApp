import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WeatherAppComponent } from 'src/weather-app/weather-app.component';
import { FiveDayForecastComponent } from './five-day-forecast/five-day-forecast.component';
import { DashboardComponent } from './dashboard/dashboard.component';


  const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'weather-app', component: WeatherAppComponent },
    { path: 'five-day-forecast', component: FiveDayForecastComponent },
    { path: 'dashboard', component: DashboardComponent },]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
 