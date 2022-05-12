import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SorteioService {
  constructor() {}

  sortear(nomes: string[]): Observable<string> {
    return new Observable((emissor) => {
      setTimeout(() => {
        if (nomes.length === 1) {
          emissor.error('Não pode sortear apenas 1');
        } else {
          const sorteado = Math.floor(Math.random() * nomes.length);
          emissor.next(nomes[sorteado]);
          emissor.complete();
        }
      }, 1000); // 1s
    });
  }
}
