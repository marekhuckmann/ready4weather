import { Component, OnInit, OnDestroy } from '@angular/core';
import { CityService } from '../../services/city.service';
import { ForecastService } from '../../services/forecast.service';
import { City } from '../../models/city.model';
import { Forecast } from '../../models/forecast.model';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
})

export class ForecastListComponent implements OnInit, OnDestroy {
  public forecasts: Forecast[];
  public subscription: Subscription;

  constructor(public forecastService: ForecastService) { }

  ngOnInit() {
    this.forecasts = this.forecastService.getForecasts();
    this.subscription = this.forecastService.forecastListUpdated
      .subscribe(
        (forecasts: Forecast[]) => {
          this.forecasts = forecasts;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
