import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent implements OnInit {

  public titulo = 'Cadatrar Produdos';
  public modeSave: 'salvar' | 'atualizar';
  public produtoForm: FormGroup;
  public produtoSelecionado: Produto | null;
  public produtos: Produto[];

  ngOnInit() {
    this.carregarProdutos();
  }

  constructor(private fb: FormBuilder,
    private produtoService: ProdutoService) {
    this.criarFrom()
  }

  carregarProdutos() {
    this.produtoService.listar().subscribe(
      (retorno: any) => {
        this.produtos = retorno;
      },
      (erro: any) => {
        console.log(erro)
      }
    )
  }

  criarFrom() {
    this.produtoForm = this.fb.group({
      id: [''],
      descricao: ['', Validators.required],
      valorProduto: ['', Validators.required]
    });
  }

  salvarProduto(produto: Produto) {
    this.produtoService[this.modeSave](produto).subscribe(
      (produto: any) => {
        console.log(produto)
        this.carregarProdutos();
        this.voltar();
      },
      (erro: any) => {
        console.error(erro)
      }
    );
  }

  deletarProduto(id: number){
    this.produtoService.apagar(id).subscribe(
      (produto: any) => {
        console.log(produto)
        this.carregarProdutos();
      },
      (erro: any) => {
        console.error(erro)
      }
    )
  }

  produtoSelect(produto: Produto) {
    this.modeSave = 'atualizar'
    this.produtoForm.patchValue(produto);
    this.produtoSelecionado = produto;
  }

  produtoSubmit() {
    this.salvarProduto(this.produtoForm.value);
  }

  produtoNovo() {
    this.modeSave = 'salvar'
    this.produtoSelecionado = new Produto();
    this.produtoForm.patchValue(this.produtoSelecionado);
  }

  voltar() {
    this.produtoSelecionado = null;
  }
}
