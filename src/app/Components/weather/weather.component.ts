import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TemperatureColorDirective } from '../../Directives/temperature-color.directive';
import { TemperatureConversionPipe } from '../../Pipes/temperature-conversion.pipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    CommonModule,
    TemperatureColorDirective,
    TemperatureConversionPipe,
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  temp: number = 0;
  unit: string = 'C';
  weatherCity: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const temperatureParam = params['temperature'];
      const cityParam = params['city'];
      if (cityParam) {
        this.weatherCity = cityParam;
      }
      if (temperatureParam) {
        this.temp = +temperatureParam;
      }
    });
  }

  toggleUnit() {
  this.unit = this.unit === 'C'? 'F' : 'C';
  }

}
