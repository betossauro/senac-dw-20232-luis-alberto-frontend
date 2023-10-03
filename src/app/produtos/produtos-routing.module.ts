import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';

const routes: Routes = [
  { path: '', component: ProdutoListagemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
