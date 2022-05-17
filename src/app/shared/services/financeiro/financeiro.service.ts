import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movimentacao } from 'src/app/models/movimentacao';

// Listar movimentações
// Adicionar novas movimentações

@Injectable({
  providedIn: 'root',
})
export class FinanceiroService {
  private movs: Movimentacao[] = [];

  getMovs(): Observable<Movimentacao[]> {
    return of(this.movs); // CRIA UM OBS A PARTIR DO MOVS
    /* return new Observable(emissor => {
       emissor.next(this.movs);
       emissor.complete();
     });
    */
  }

  addMov(mov: Movimentacao): Observable<Movimentacao[]> {
    this.movs.push(mov);
    return this.getMovs(); // O COMPONENTE PODE USAR O NOVO OBSERVABLE COM MOVS ATUALIZADO
  }
}
