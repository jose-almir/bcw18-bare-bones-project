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
      imagem: 'https://m.media-amazon.com/images/I/518Iz2nOCcL._AC_SX522_.jpg',
      nomeDoProduto: 'Mi Band 6',
      descricao: 'Linda tela sensível ao toque AMOLED de 1,5 polegadas: gráficos nítidos e brilhantes com tela 40% maior do que Mi Band 5. Medidas imperiais (pés, milhas, fahrenheit) ou métricas.',
      preco: 205,
      emPromocao: true,
      desconto: 0.05, 
      categoria: CategoriaProduto.ELETRO
    },
    {
      imagem: 'https://m.media-amazon.com/images/I/41YC31NcaoL._AC_SX679_.jpg',
      nomeDoProduto: 'Mesa gamer',
      descricao: 'Mesa Escrivaninha Gamer com 2 Nichos Tecno Mobili - Preto/Verde',
      preco: 417,
      emPromocao: false,
      desconto: 0.0, 
      categoria: CategoriaProduto.MOVEIS
    },
    {
      imagem: 'https://m.media-amazon.com/images/I/91fj3DivUDL._AC_SY741_.jpg',
      nomeDoProduto: 'Super Pano Multiuso',
      descricao: 'Remove pó e auxilia na remoção de manchas das superfícies. 3 cores diferentes, um para cada comodo da casa',
      preco: 29.6,
      emPromocao: true,
      desconto: 0.03, 
      categoria: CategoriaProduto.LIMPEZA
    }
  ];

  carrinho: Produto[] = [];

  addCarrinho(produto: Produto) {
    this.carrinho.push(produto);

    console.log("Produto adicionado");
    console.log(this.carrinho);
  }

  produtoNoCarrinho(produto: Produto): boolean {
    return this.carrinho.includes(produto);
  }

  constructor() { }



  ngOnInit(): void {
  }

}
