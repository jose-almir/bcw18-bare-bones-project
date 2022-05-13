import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
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
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
