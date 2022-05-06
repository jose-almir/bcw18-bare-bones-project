import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'censor'
})
export class CensorPipe implements PipeTransform {

  transform(mensagem: string, palavras: string) {
    const palavrasSplitted = palavras.split(","); // ['lol', 'valorant']
    const mensagemSplitted = mensagem.split(" "); // ['Eu', 'jogo', '###', '########']

    for(let palavraCensura of palavrasSplitted) {
      mensagemSplitted.forEach((palavraMensagem, i) => {
        if(palavraCensura === palavraMensagem) {
          mensagemSplitted[i] = "#".repeat(palavraCensura.length);
        }
      })
    }

    return mensagemSplitted.join(" ");
  }
}
