import { Component, OnInit } from '@angular/core';
import { CategoriaProduto, Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/shared/services/produtos/produtos.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private produtosService: ProdutosService) { }

  produtos: Produto[] = [];
  carrinho: Produto[] = [];

  addCarrinho(produto: Produto) {
    this.carrinho.push(produto);
  }

  produtoNoCarrinho(produto: Produto): boolean {
    return this.carrinho.includes(produto);
  }

  ngOnInit(): void {
    // Dentro do hook on-init você deve colocar
    // os acessos aos dados iniciais
    this.produtos = this.produtosService.getProdutos();
  }
}
