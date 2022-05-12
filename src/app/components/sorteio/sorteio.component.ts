import { Component, OnInit } from '@angular/core';
import { SorteioService } from 'src/app/shared/services/sorteio/sorteio.service';

@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css'],
})
export class SorteioComponent implements OnInit {
  valores: string = '';
  sorteado: string = '';

  constructor(private sorteioService: SorteioService) {}

  loading = false;

  onSorteio() {
    const nomes = this.valores.trim().split("\n");
    this.sorteado = '';
    this.loading = true;
    console.log(this.valores);

    //const obs = this.sorteioService.sortear(nomes);
    //obs.subscribe...
    this.sorteioService.sortear(nomes).subscribe({
      next: (sorteado) => {
        this.loading = false;
        this.sorteado = sorteado;
      },
      error: (erro) => {
        this.loading = false;
        alert(erro);
      }
    });
  }

  ngOnInit(): void {}
}
