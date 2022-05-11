import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { TesteDataBindingComponent } from './components/teste-data-binding/teste-data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EllipsisPipe } from './shared/pipes/ellipsis/ellipsis.pipe';
import { AbbvPipe } from './shared/pipes/abbv/abbv.pipe';
import { SumPipe } from './shared/pipes/sum/sum.pipe';
import { CensorPipe } from './shared/pipes/censor/censor.pipe';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NovoProdutoComponent } from './components/novo-produto/novo-produto.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ProdutosComponent,
    ProdutoComponent,
    TesteDataBindingComponent,
    EllipsisPipe,
    AbbvPipe,
    SumPipe,
    CensorPipe,
    HomeComponent,
    LoginComponent,
    NovoProdutoComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
