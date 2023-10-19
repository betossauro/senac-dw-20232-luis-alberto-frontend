import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { ProdutoSeletor } from '../../shared/model/seletor/produto.seletor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.scss'],
})
export class ProdutoListagemComponent implements OnInit {
  public produtos: Array<Produto> = new Array();
  public seletor: ProdutoSeletor = new ProdutoSeletor();

  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.buscarProdutos();
  }

  buscarProdutos() {
    this.produtoService.listarTodos().subscribe(
      (resultado) => {
        this.produtos = resultado;
      },
      (erro) => {
        console.log('Erro ao buscar produtos', erro);
      }
    );
  }

  pesquisar() {
    this.produtoService.listarComSeletor(this.seletor).subscribe(
      (resultado) => {
        this.produtos = resultado;
      },
      (erro) => {
        console.log('Erro ao buscar produtos', erro);
      }
    );
  }

  voltar() {
    this.router.navigate(['/produtos/listagem/']);
  }

  editar(id: number) {
    this.router.navigate(['/produtos/detalhe', id]);
  }

  limpar() {
    this.seletor = new ProdutoSeletor();
  }

  excluir(id: number) {
    Swal.fire({
      title: 'Você está certo disso?',
      text: `Deseja excluir o produto #${id}?`,
      icon: 'warning',
      showCancelButton: true,
    }).then((r) => {
      if (r.isConfirmed) {
        this.produtoService.excluir(id).subscribe(
          (sucesso) => {
            Swal.fire('Sucesso', 'Produto excluído com sucesso!', 'success');
            this.buscarProdutos();
          },
          (erro) => {
            Swal.fire('Erro', `Erro ao excluir o produto: ${erro}`, 'error');
          }
        );
      }
    });
  }
}
