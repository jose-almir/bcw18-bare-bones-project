import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface WeatherData {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  constructor(private http: HttpClient) {}

  apiKey = 'b1c683a5f01f1b2da53ebb9f19b5993b'; // chave pessoal de acesso
  // endpoint do open weather
  baseUrl =
    'https://api.openweathermap.org/data/2.5/weather?units=metric&lang=pt_br';

  getWeatherData(coords: GeolocationCoordinates): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.baseUrl, {
      params: {
        lat: coords.latitude,
        lon: coords.longitude,
        appid: this.apiKey,
      },
    });
  }
}
