import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CategoriaProduto, Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit, OnDestroy { // <app-produto [dadoProduto]="x">

  @Input('dadoProduto') produto!: Produto; // Torna a propriedade uma propriedade de entrada do componente
  @Output('onCarrinho') onCarrinho = new EventEmitter<Produto>();

  precoDesconto() {
    return this.produto.preco - (this.produto.preco * this.produto.desconto);
  }

  constructor() { }

  ngOnDestroy(): void {
    console.log("E morreu")
  }

  onComprar() {
    alert("Produto adicionado no carrinho!");
    this.onCarrinho.emit(this.produto);
  }

  ngOnInit(): void {
    console.log("No céu tem pão?")
  }

}
