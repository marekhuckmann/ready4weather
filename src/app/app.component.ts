import { Component } from '@angular/core';
import { CityService } from './services/city.service';
import { ForecastService } from './services/forecast.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CityService, ForecastService]
})
export class AppComponent { }
