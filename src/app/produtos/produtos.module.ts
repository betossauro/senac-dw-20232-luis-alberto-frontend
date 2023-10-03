import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';


@NgModule({
  declarations: [
    ProdutoListagemComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
