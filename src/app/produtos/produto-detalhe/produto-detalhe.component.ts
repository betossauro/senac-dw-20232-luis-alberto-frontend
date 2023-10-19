import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';
import { Fabricante } from 'src/app/shared/model/fabricante';
import { ProdutoService } from './../../shared/services/produto.service';
import { FabricanteService } from '../../shared/services/fabricante.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss'],
})
export class ProdutoDetalheComponent implements OnInit {
  public idProduto: number;
  public produto: Produto = new Produto();
  public fabricantes: Fabricante[] = [];

  @ViewChild('ngForm')
  public ngForm: NgForm;

  constructor(
    private produtoService: ProdutoService,
    private fabricanteService: FabricanteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idProduto = params['id']; //'id' é o nome do parâmetro definido na rota

      if (this.idProduto) {
        this.buscarProduto();
      }
    });

    this.fabricanteService.listarTodos().subscribe(
      (resultado) => {
        this.fabricantes = resultado;
      },
      (erro) => {
        console.log('Erro ao buscar produtos', erro);
      }
    );
  }

  salvar(form: NgForm) {
    if (form.invalid) {
      if (form.invalid) {
        Swal.fire('Alerta', 'Preencha os campos obrigatórios', 'warning');
        return;
      }
    }
    if (this.idProduto) {
      this.atualizarProduto();
    } else {
      this.inserirProduto();
    }
  }

  buscarProduto() {
    this.produtoService.pesquisarPorId(this.idProduto).subscribe(
      (resultado) => {
        this.produto = resultado;
      },
      (erro) => {
        Swal.fire(
          'Erro',
          'Erro ao buscar o produto com id (' + this.idProduto + ') : ' + erro,
          'error'
        );
      }
    );
  }

  inserirProduto() {
    this.produtoService.atualizar(this.produto).subscribe(
      (sucesso) => {
        Swal.fire('Sucesso', 'Produto atualizado!', 'success');
        this.produto = new Produto();
      },
      (erro) => {
        Swal.fire('Erro', 'Erro ao atualizar o produto: ' + erro, 'error');
      }
    );
  }

  atualizarProduto() {
    this.produtoService.salvar(this.produto).subscribe(
      (sucesso) => {
        //usar um componente de alertas (importar no app.module.ts)
        //https://github.com/sweetalert2/ngx-sweetalert2
        //Swal.fire(titulo, texto, 'warning');
        Swal.fire('Sucesso', 'Produto cadastrado!', 'success');
        this.produto = new Produto();
      },
      (erro) => {
        Swal.fire('Erro', 'Erro ao cadastrar o produto: ' + erro, 'error');
      }
    );
  }

  voltar() {
    this.router.navigate(['/produtos/listagem/']);
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}
