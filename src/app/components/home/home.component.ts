import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { GeolocationService } from 'src/app/shared/services/geolocation/geolocation.service';
import {
  WeatherApiService,
  WeatherData,
} from 'src/app/shared/services/weather-api/weather-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private geolocationService: GeolocationService,
    private weatherApiService: WeatherApiService
  ) {}
  // Observable que guarda a informação de clima, começa undefined
  weather$?: Observable<WeatherData>;
  error = false; // mostrar no template caso o usuário negue a localização
  lat: number = 0;
  lon: number = 0;

  ngOnInit(): void {
    // Com o Cold Observable não precisa dar unsubscribe pois ele é finito!
    this.geolocationService.getPosition().subscribe({
      next: (coords) => {
        // Cria um observable novo de clima com base nas coordenadas do serviço
        this.lat = coords.latitude;
        this.lon = coords.longitude;
        this.weather$ = this.weatherApiService.getWeatherData(coords); // lazy
      },
      error: (erro) => {
        // console.error(erro);
        this.error = true;
      },
    });

    // Essa forma descarta a necessidade de subscribe no primeiro observable.
    // Pois com switchMap, quando você tem a informação do primeiro,
    // é possível criar um segundo observable com base na emissão do anterior.

    // this.weather$ = this.geolocationService
    //   .getPosition()
    //   .pipe(
    //     switchMap((coords) => this.weatherApiService.getWeatherData(coords))
    //   );
  }
}
