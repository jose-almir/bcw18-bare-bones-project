import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  constructor() {}
  // Cold Observable: emite uma informação
  getPosition(): Observable<GeolocationCoordinates> {
    return new Observable((emissor) => {
      // lazy
      const geolocation: Geolocation = navigator.geolocation;

      if (geolocation) {
        // verifica se o browser suporta geolocalização
        geolocation.getCurrentPosition(
          (pos) => {
            emissor.next(pos.coords); // emite coordenadas
            emissor.complete(); // finaliza as emissões
          },
          (erro) => emissor.error(erro) // usuário nega localização/localização indisponível
        );
      } else {
        // navegador não suporta localização
        emissor.error(new Error('Navegador não suporta geolocalização'));
      }
    });
  }
  // Hot Observable: emite várias informações
  getPositionRealTime(): Observable<GeolocationCoordinates> {
    return new Observable((emissor) => {
      const geolocation = navigator.geolocation;
      let watchId: number | undefined;

      if (geolocation) { // verifica se o browser suporta geolocalização
        watchId = geolocation.watchPosition( // guarda o id do watch
          (pos) => emissor.next(pos.coords), // caso dê bom o geolocation
          (erro) => emissor.error(erro) // caso o usuário negue
        );
      } else {
        emissor.error(new Error('Navegador não suportado')); // caso o browser não suporte
      }

      return () => { // o Subscription chama essa função quando cancela o Observable
        geolocation.clearWatch(watchId!); // Encerra a fonte de dados
      };
    });
  }
}
