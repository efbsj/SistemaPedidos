import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pedido } from '../models/Pedido';
import { PedidoService } from '../services/pedido.service';
import { ProdutoService } from '../services/produto.service';
import { FornecedorService } from '../services/fornecedor.service';
import { Produto } from '../models/Produto';
import { Fornecedor } from '../models/Fornecedor';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent implements OnInit {

  public titulo = 'Cadatrar Produdos';
  public modeSave: 'salvar' | 'atualizar';
  public pedidoForm: FormGroup;
  public pedidoSelecionado: Pedido | null;
  public pedidos: Pedido[];
  public produtos: Produto[];
  public fornecedores: Fornecedor[];

  ngOnInit() {
    this.carregarPedidos();
    this.carregarProdutos();
    this.carregarFornecedores();
  }

  constructor(private fb: FormBuilder,
    private pedidoService: PedidoService,
    private produtoService: ProdutoService,
    private fornecedorService: FornecedorService) {
    this.criarFrom()
  }

  carregarPedidos() {
    this.pedidoService.listar().subscribe(
      (retorno: any) => {
        this.pedidos = retorno;
      },
      (erro: any) => {
        console.log(erro)
      }
    )
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

  carregarFornecedores() {
    this.fornecedorService.listar().subscribe(
      (retorno: any) => {
        this.fornecedores = retorno;
      },
      (erro: any) => {
        console.log(erro)
      }
    )
  }

  criarFrom() {
    this.pedidoForm = this.fb.group({
      id: [''],
      fornecedorId: [0, Validators.required],
      produtoId: [0, Validators.required],
      dataPedido: [new Date, Validators.required],
      quantidadeProdutos: [0, Validators.required],
      valorTotalPedido: [0, Validators.required]
    });
  }

  salvarPedido(Pedido: Pedido) {
    this.pedidoService[this.modeSave](Pedido).subscribe(
      (Pedido: any) => {
        console.log(Pedido)
        this.carregarPedidos();
        this.voltar();
      },
      (erro: any) => {
        console.error(erro)
      }
    );
  }

  deletarPedido(id: number) {
    this.pedidoService.apagar(id).subscribe(
      (Pedido: any) => {
        console.log(Pedido)
        this.carregarPedidos();
      },
      (erro: any) => {
        console.error(erro)
      }
    )
  }

  pedidoSelect(Pedido: Pedido) {
    this.modeSave = 'atualizar'
    this.pedidoForm.patchValue(Pedido);
    this.pedidoSelecionado = Pedido;
  }

  pedidoSubmit() {
    this.salvarPedido(this.pedidoForm.value);
  }

  pedidoNovo() {
    this.modeSave = 'salvar'
    this.pedidoSelecionado = new Pedido();
    this.pedidoForm.patchValue(this.pedidoSelecionado);
  }

  voltar() {
    this.pedidoSelecionado = null;
  }
}

