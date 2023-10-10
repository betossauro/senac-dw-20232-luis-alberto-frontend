import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';
import { Fabricante } from 'src/app/shared/model/fabricante';
import { ProdutoService } from './../../shared/services/produto.service';
import { FabricanteService } from '../../shared/services/fabricante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss']
})
export class ProdutoDetalheComponent implements OnInit {

  public produto: Produto = new Produto();
  public fabricantes: Fabricante[] = [];

  constructor(private produtoService: ProdutoService,
    private fabricanteService: FabricanteService,
    private router: Router){

  }

  ngOnInit(): void {
    this.fabricanteService.listarTodos().subscribe(
      resultado => {
        this.fabricantes = resultado;
      },
      erro  => {
        console.log("Erro ao buscar produtos", erro);

      }
    )
    this.cadastrarProduto();
  }

  cadastrarProduto() {
    this.produtoService.salvar(this.produto);
  }

  voltar() {
    this.router.navigate(['app/produtos/listagem/']);
  }

  comparedById: (o1: any,o2: any) => boolean;
}
