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
  sortBy: string ='';
  sortAscending : boolean = false;
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

navigateToWeather(city: string, temperature: number ) {
    this.router.navigate(['/weather'], { queryParams: { city, temperature } });
  }

    searchWeatherList() {
      if (!this.searchText) {
        this.filteredWeatherList = this.weatherList;
      } else {
        this.filteredWeatherList = this.weatherList.filter((cityWeather) => {
          return cityWeather.city
            .toLowerCase()
            .includes(this.searchText.toLowerCase());

        });
        // console.log(this.filteredWeatherList)
      }
    }


  sortWeatherList(property:string) {
    this.sortBy=property;
    this.sortAscending = !this.sortAscending;
    this.filteredWeatherList.sort((a,b)=>{
      const avalue=a[property];
      const bvalue=b[property];
      if(avalue>bvalue){
        return this.sortAscending? 1 : -1;
      }
      else if(avalue<bvalue){
        return this.sortAscending? -1 : 1;
      }
      return 0;
    })
  }


}
