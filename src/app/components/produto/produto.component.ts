import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  imagem: string = 'https://i.picsum.photos/id/953/400/400.jpg?hmac=sCGl1xt9pdRyzGnhO5N_HVo_bObR1VVbUitw72cZ7K4';
  nomeDoProduto: string = 'Nome do Produto';
  descricao: string = 'Uma descrição super interessante';

  constructor() { }

  onComprar() {
    alert("Produto adicionado no carrinho!");
  }

  ngOnInit(): void {
  }

}
