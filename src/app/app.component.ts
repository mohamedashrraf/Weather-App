import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { WeatherComponent } from './Components/weather/weather.component';
import { WeatherListComponent } from './Components/weather-list/weather-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    WeatherComponent,
    WeatherListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Weather-App'; 
}
