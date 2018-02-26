import { Component, Input } from '@angular/core';
import { CityService } from '../../services/city.service';
import { ForecastService } from '../../services/forecast.service';
import { City } from '../../models/city.model';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
})

export class WeatherItemComponent {
  @Input() public city: City[];

  constructor(public cityService: CityService, public forecastService: ForecastService) { }

  onClose() {
    this.cityService.deleteCity();
    this.forecastService.deleteForecast();
  }

}
