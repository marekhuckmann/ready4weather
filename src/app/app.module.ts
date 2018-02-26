import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherItemComponent } from './components/weather-item/weather-item.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';

import { ForecastItemComponent } from './components/forecast-item/forecast-item.component';
import { ForecastListComponent } from './components/forecast-list/forecast-list.component';
import { ForecastGetComponent } from './components/forecast-get/forecast-get.component';

import { CityService } from './services/city.service';
import { ForecastService } from './services/forecast.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent,
    ForecastItemComponent,
    ForecastListComponent,
    ForecastGetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
