import { Component } from '@angular/core';
import { WeatherService } from '../app/weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.sass'],
})
export class WeatherSearchComponent {
  city: string = '';
  weather: any;

  constructor(private weatherService: WeatherService) {}

  search() {
    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.weather = data;
    });
  }
}
