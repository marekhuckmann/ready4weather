import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

import { City } from '../models/city.model';
import { Forecast } from '../models/forecast.model';

@Injectable()
export class ForecastService {
    forecastListUpdated = new Subject<Forecast[]>();
    private forecasts: Forecast[] = [];
    forecastData: any = {};

    constructor(private http: HttpClient) { }

    getCityName(forecast: string) {
        this.searchForecastData(forecast)
            .subscribe(data => {
                this.forecastData = data;
                const avgArr = this.averageTemp(this.forecastData);
                const forecastItem = new Forecast(avgArr[0], avgArr[1]);
                this.addForecast(forecastItem);
            });
    }

    averageTemp(data) {
        let arr = [];
        let temps = [];
        let icons = [];

        // 40 but sometimes 39
        const x = data.cnt;
        for (let i = 0; i < 8; i++) {
            arr[i] = data.list[i].main.temp;
        }
        icons.push(data.list[0].weather[0].icon);
        temps.push(Math.floor(arr.reduce((a, b) => a + b, 0) / arr.length));
        arr.length = 0;

        for (let i = 8; i < 16; i++) {
            arr[i] = data.list[i].main.temp;
        }
        icons.push(data.list[8].weather[0].icon);
        temps.push(Math.floor(arr.reduce((a, b) => a + b, 0) / arr.length));
        arr.length = 0;

        for (let i = 16; i < 24; i++) {
            arr[i] = data.list[i].main.temp;
        }
        icons.push(data.list[16].weather[0].icon);
        temps.push(Math.floor(arr.reduce((a, b) => a + b, 0) / arr.length));
        arr.length = 0;

        for (let i = 24; i < 32; i++) {
            arr[i] = data.list[i].main.temp;
        }
        icons.push(data.list[24].weather[0].icon);
        temps.push(Math.floor(arr.reduce((a, b) => a + b, 0) / arr.length));
        arr.length = 0;

        for (let i = 32; i < x; i++) {

            arr[i] = data.list[i].main.temp;
        }
        icons.push(data.list[32].weather[0].icon);
        temps.push(Math.floor(arr.reduce((a, b) => a + b, 0) / arr.length));
        arr.length = 0;

        arr.push(temps);
        arr.push(icons);

        return arr;
    }

    getForecasts() {
        return this.forecasts.slice();
    }

    deleteForecast() {
        this.forecasts.pop();
        this.forecastListUpdated.next(this.forecasts.slice());
    }

    addForecast(forecast: Forecast) {
        this.forecasts.push(forecast);
        this.forecastListUpdated.next(this.forecasts.slice());
    }

    searchForecastData(cityName: string) {
        return this.http.get<City[]>('http://api.openweathermap.org/data/2.5/forecast?q=' + cityName +
            '&units=metric&appid=aa9f1394b8547db91b758ccb20c2437a');
    }
}
