import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FinanceiroComponent } from './components/financeiro/financeiro.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NovoProdutoComponent } from './components/novo-produto/novo-produto.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { SorteioComponent } from './components/sorteio/sorteio.component';
import { TesteDataBindingComponent } from './components/teste-data-binding/teste-data-binding.component';

// Gerenciar as rotas da aplicação no geral
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produtos/novo', component: NovoProdutoComponent },
  { path: 'teste-data-binding', component: TesteDataBindingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'sorteio', component: SorteioComponent },
  { path: 'github/repos', component: GithubReposComponent },
  { path: 'financeiro', component: FinanceiroComponent },
  { path: '**', component: NotFoundComponent },
];

// Atividades 17.05 (até 11H)
// 1) Criar uma página de pesquisa de usuário do Github.
// - Criar um novo metodo para pesquisar os dados do usuário (Owner)
// - ENDPOINT: Exemplo: https://api.github.com/users/victoricoma
// - Criar um novo componente com a rota 'github/user'
// - Consumir o serviço ao fazer busca via input
// 2) Criar uma página de pesquisa de repositório do Github.
// - Criar um novo metodo para pesquisar os repositorios (Repository)
// - ENDPOINT: Exemplo: https://api.github.com/search/repositories?q=angular
// - Criar um novo componente com a rota 'github/search'
//

// interface Data {
//   items: Repository[];
// }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
