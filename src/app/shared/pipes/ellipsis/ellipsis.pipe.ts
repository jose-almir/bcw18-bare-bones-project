import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {
  transform(mensagem: string, limite: number = 30): string {
    if(mensagem.length > limite) {
      return mensagem.slice(0, limite) + '...';
    }
    return mensagem;
  }
}

/*
'Olá tudo bem com você?' | ellipsis ===> 'Olá tudo b...'
LIMITE: 30 CARACTERES

function ellipsis(mensagem: string): string {
  if(mensagem.length > 30) {
    return mensagem.slice(0, 30) + '...';
  }

  return mensagem;
}
*/

