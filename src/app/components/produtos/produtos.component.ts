import { Component, OnInit } from '@angular/core';
import { CategoriaProduto, Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [
    {
      imagem: 'https://i.picsum.photos/id/953/400/400.jpg?hmac=sCGl1xt9pdRyzGnhO5N_HVo_bObR1VVbUitw72cZ7K4',
      nomeDoProduto: 'Nome do Produto',
      descricao: 'Uma descrição super interessante',
      preco: 20.5,
      emPromocao: true,
      desconto: 0.1, // 10%
      categoria: CategoriaProduto.ELETRO
    },
    {
      imagem: 'https://i.picsum.photos/id/953/400/400.jpg?hmac=sCGl1xt9pdRyzGnhO5N_HVo_bObR1VVbUitw72cZ7K4',
      nomeDoProduto: 'Nome do Produto',
      descricao: 'Uma descrição super interessante',
      preco: 20.5,
      emPromocao: true,
      desconto: 0.1, // 10%
      categoria: CategoriaProduto.ELETRO
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
