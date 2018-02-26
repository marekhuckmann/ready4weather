import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-get',
  templateUrl: './forecast-get.component.html',
  styleUrls: ['./forecast-get.component.scss']
})
export class ForecastGetComponent implements OnInit {
  forecastFlag = false;

  constructor() { }

  onShowForecast() {
    this.forecastFlag = !this.forecastFlag;
  }

  ngOnInit() {
  }
}
