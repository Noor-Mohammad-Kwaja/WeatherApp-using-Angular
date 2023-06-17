import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';
@Component({
selector: 'app-weather',
templateUrl: './weather.component.html',
styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
city = "";
weatherData: any;
faCloudSunRain=faCloudSunRain;
faTemperatureHalf = faTemperatureHalf;
constructor(private weatherService: WeatherService) { }

ngOnInit(): void {
}

getWeather() {
this.weatherService.getWeather(this.city).subscribe((data: any) => {
this.weatherData = data;
});
}
}