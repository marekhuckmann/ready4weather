import { Component, OnInit, OnDestroy } from '@angular/core';
import { CityService } from '../../services/city.service';
import { City } from '../../models/city.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit, OnDestroy {
  // app can be scaled to display multiple cities at once
  cities: City[];
  private subscription: Subscription;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cities = this.cityService.getCities();
    this.subscription = this.cityService.listUpdated
      .subscribe(
        (cities: City[]) => {
          this.cities = cities;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
