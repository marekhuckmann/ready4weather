import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';


import { City } from '../models/city.model';
import { Forecast } from '../models/forecast.model';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';

@Injectable()
export class CityService {
  listUpdated = new Subject<City[]>();
  private cities: City[] = [];

  constructor(private http: HttpClient) { }

  getCities() {
    return this.cities.slice();
  }

  addCity(city: City) {
    this.cities.push(city);
    this.listUpdated.next(this.cities.slice());
  }

  deleteCity() {
    this.cities.pop();
    this.listUpdated.next(this.cities.slice());
  }

  searchWeatherData(cityName: string): Observable<any> {
    return this.http.get<City[]>('http://api.openweathermap.org/data/2.5/weather?q=' + cityName +
      '&units=metric&appid=aa9f1394b8547db91b758ccb20c2437a')
      .catch((err: HttpErrorResponse) => {
        if (err.error.message === 'city not found') {
          // typical error - every letter in the city must match
          console.error('Nie znaleziono miasta ' + cityName + ', ale możesz szukać dalej.');
        } else if (err.error instanceof Error) {
          // client-side or network error
          console.error('Wystąpił błąd:', err.error.message);
        } else {
          // other
          console.error('An error occurred:', err.error.message);
        }
        return Observable.empty<City[]>();
      });
  }
}
