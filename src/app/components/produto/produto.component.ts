import { Component, OnInit } from '@angular/core';
import { CategoriaProduto, Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto = {
    imagem: 'https://i.picsum.photos/id/953/400/400.jpg?hmac=sCGl1xt9pdRyzGnhO5N_HVo_bObR1VVbUitw72cZ7K4',
    nomeDoProduto: 'Nome do Produto',
    descricao: 'Uma descrição super interessante',
    preco: 20.5,
    emPromocao: true,
    desconto: 0.1, // 10%
    categoria: CategoriaProduto.ELETRO
  }

  precoDesconto() {
    return this.produto.preco - (this.produto.preco * this.produto.desconto);
  }

  constructor() { }

  onComprar() {
    alert("Produto adicionado no carrinho!");
  }

  ngOnInit(): void {
  }

}
