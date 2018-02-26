import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CityService } from '../../services/city.service';
import { ForecastService } from '../../services/forecast.service';
import { City } from '../../models/city.model';
import { Forecast } from '../../models/forecast.model';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styles: [`
    .form-group {
      margin-top: 1rem;
    }
  `]
})
export class WeatherSearchComponent implements OnInit {
  private searchStream = new Subject<string>();
  data: any = {};

  constructor(private cityService: CityService, private forecastService: ForecastService) { }

  onAddItem(form: NgForm) {
    // cleans the screen if there's anything displaying
    this.cityService.deleteCity();
    this.forecastService.deleteForecast();

    // sends a city name to ForecastService working on it in the background
    this.forecastService.getCityName(this.data.name);

    const cityItem = new City(
      this.data.name,
      this.data.sys.country,
      Math.floor(this.data.main.temp) + '\u00B0C',
      this.data.weather[0].icon,
      this.data.clouds.all + '%',
      this.data.wind.speed + ' m/s');

    this.cityService.addCity(cityItem);
    form.reset();
    this.data = {};
  }



  onTypeCity(cityName: string) {
    if (cityName) {
      // if handles deleting all of the input
      this.searchStream
        .next(cityName);
    }
  }

  ngOnInit() {
    // waits half a second before sending request
    this.searchStream
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap((input: string) => this.cityService.searchWeatherData(input))
      .subscribe(
        data => this.data = data,
    );
  }
}
