import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { TesteDataBindingComponent } from './components/teste-data-binding/teste-data-binding.component';
import { FormsModule } from '@angular/forms';
import { EllipsisPipe } from './shared/pipes/ellipsis/ellipsis.pipe';
import { AbbvPipe } from './shared/pipes/abbv/abbv.pipe';
import { SumPipe } from './shared/pipes/sum/sum.pipe';
import { CensorPipe } from './shared/pipes/censor/censor.pipe';

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
    CensorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
