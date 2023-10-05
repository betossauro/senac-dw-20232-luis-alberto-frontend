import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { ProdutoSeletor } from '../../shared/model/seletor/produto.seletor';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.scss']
})
export class ProdutoListagemComponent implements OnInit {

  public produtos: Array<Produto> = new Array();
  public seletor: ProdutoSeletor = new ProdutoSeletor();

  constructor(private produtoService: ProdutoService){

  }

  ngOnInit(): void {
    this.buscarProdutos();
  }

  buscarProdutos() {
    this.produtoService.listarTodos().subscribe(
      resultado => {
        this.produtos = resultado;
      },
      erro => {
        console.log('Erro ao buscar produtos', erro);

      }
    )
  }

  editar(id: number){
    //TODO: Implementar a edição do produto
    console.log('Editando o produto de id: ', id);
  }

  pesquisar() {

  }
}
