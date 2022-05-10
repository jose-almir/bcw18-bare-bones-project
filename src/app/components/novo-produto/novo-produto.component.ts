import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {
  produto: Produto = {categoria: 'eletro', desconto: 0.0} as Produto;


  constructor() { }

  onSubmit() {
    alert(`Produto ${this.produto.nomeDoProduto} criado!`);
    console.log(this.produto);
  }

  ngOnInit(): void {
  }

}
