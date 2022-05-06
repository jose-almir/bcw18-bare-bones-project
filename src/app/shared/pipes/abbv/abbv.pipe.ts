import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbv'
})
export class AbbvPipe implements PipeTransform {

  transform(nome: string) {
    const nomes = nome.split(" "); // ['José', 'Almir']

    if(nomes.length === 1) {
      return nome;
    }

    const primeiroNome = nomes[0];
    const segundoNome = nomes[1];

    return `${primeiroNome} ${segundoNome[0]}.`
  }
}

/*
'José Almir' | abbv PRODUZ 'José A.'
'José Almir de Souza' | abbv PRODUZ 'José A.'
'Carlos Silva Gomes' | abbv PRODUZ 'Carlos S.'
'João' | abbv DEU RUIM
*/