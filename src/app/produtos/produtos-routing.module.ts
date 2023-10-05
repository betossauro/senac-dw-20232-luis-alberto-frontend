import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

const routes: Routes = [
  { path: '', component: ProdutoListagemComponent},
  { path: 'produtos/listagem', component: ProdutoListagemComponent},
  { path: 'produtos/detalhe', component: ProdutoDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }