import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Movimentacao } from 'src/app/models/movimentacao';
import { FinanceiroService } from 'src/app/shared/services/financeiro/financeiro.service';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.css'],
})
export class FinanceiroComponent implements OnInit {
  movs$?: Observable<Movimentacao[]>;

  constructor(
    private financeiroService: FinanceiroService,
    private fb: FormBuilder
  ) {}

  // Reactive Forms
  movForm = this.fb.group({
    titulo: ['', [Validators.required, Validators.maxLength(55)]],
    total: [0, [Validators.required, Validators.min(0)]],
    tipo: [0, [Validators.required]],
  });
  // Um control guarda o estado do input: touched/untouched,
  // valid/invalid, pristine/dirty, valor interno
  get titulo() {
    return this.movForm.get('titulo');
  }

  onSubmit() {
    this.movs$ = this.financeiroService.addMov(this.movForm.value);
    this.movForm.reset();
  }

  ngOnInit(): void {
    // inicialização
    this.movs$ = this.financeiroService.getMovs();
    console.log('done');
  }
}
