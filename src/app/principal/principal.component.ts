import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/Pedido';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit {

  public pedidos: Pedido[];
  public pedidoForm: FormGroup;
  public exibir: true | false;

  ngOnInit() {
  }

  constructor(private fb: FormBuilder,
    private pedidoService: PedidoService) {
    this.criarFrom()
  }

  criarFrom() {
    this.pedidoForm = this.fb.group({
      cnpj: [''],
    });
  }

  carregarPedidos() {
    this.exibir = false;
    this.pedidoService.ListarPorCnpjFornecedor(this.pedidoForm.value.cnpj).subscribe(
      (retorno: any) => {
        this.pedidos = retorno;
        this.exibir = true;
      },
      (erro: any) => {
        console.log(erro)
      }
    )
  }
}


