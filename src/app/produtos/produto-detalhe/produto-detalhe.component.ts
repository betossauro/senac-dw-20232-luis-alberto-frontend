import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss']
})
export class ProdutoDetalheComponent implements OnInit {

  constructor(private produtoService: ProdutoService){

  }

  ngOnInit(): void {
    this.cadastrarProduto();
  }

  //TODO
  cadastrarProduto() {
    this.produtoService.salvar;
  }
}
