import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  cadastroForm = this.fb.group({
    nome: [
      '',
      [Validators.required, Validators.minLength(5), this.maxPalavras(9)],
    ],
    email: ['', [Validators.required, Validators.email, this.onlySoulcode]],
    endereco: ['', [Validators.required, Validators.maxLength(50)]],
    senha: ['', [Validators.required, Validators.minLength(8)]],
  });

  get nome() {
    return this.cadastroForm.get('nome');
  }

  get email() {
    return this.cadastroForm.get('email');
  }

  get endereco() {
    return this.cadastroForm.get('endereco');
  }

  get senha() {
    return this.cadastroForm.get('senha');
  }

  maxPalavras(palavras: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value.split(' ').length > palavras
        ? { maxpalavras: true }
        : null;
    };
  }

  onlySoulcode(control: AbstractControl): ValidationErrors | null {
    if(Validators.email(control) === null && Validators.required(control) === null) {
      if(!control.value.includes('@soulcodeacademy.org')) {
        return { onlysoulcode: true };
      }
    }

    return null;
  }

  ngOnInit(): void {}
}
