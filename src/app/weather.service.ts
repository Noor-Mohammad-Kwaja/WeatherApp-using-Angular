import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class WeatherService {
private apiKey = 'cc952b73961d1af8d8b3839d631bed08';

constructor(private http: HttpClient) { }

getWeather(city: string) {
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`;
return this.http.get(apiUrl);
}
}
