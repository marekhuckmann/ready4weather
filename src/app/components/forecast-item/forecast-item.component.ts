import { Component, Input  } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Forecast } from '../../models/forecast.model';
import { ForecastService } from '../../services/forecast.service';

@Component({
    selector: 'app-forecast-item',
    templateUrl: './forecast-item.component.html',
    styleUrls: ['./forecast-item.component.scss']
})
export class ForecastItemComponent {
    @Input() forecast: Forecast[];

    constructor() { }

}
