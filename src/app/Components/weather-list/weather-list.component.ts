import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-list',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.css'
})
export class WeatherListComponent {
  searchText: string = '';
  filteredWeatherList: any[];
   weatherList: any[] = [
    { city: 'Cairo', temperature: 20 },
    { city: 'Giza', temperature: 25 },
    { city: 'Alexandria', temperature: 9 },
    { city: 'Riyadh', temperature: 30 },
    { city: 'Dubai', temperature: 45 },

  ];

  constructor(private router: Router) {
    this.filteredWeatherList = this.weatherList;
  }

  navigateToWeather(temperature: number){
    this.router.navigate(['/weather'], { queryParams: { temperature } });
  }

  sortWeatherList(arg0: string) {
  throw new Error('Method not implemented.');
  }
  searchWeatherList() {
  throw new Error('Method not implemented.');
  }


}
