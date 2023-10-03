import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'produtos', pathMatch: 'full'},
  {
    path:'produtos',
    loadChildren:() => import('./produtos/produtos.module').then(m=>m.ProdutosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
