import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../models/Fornecedor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FornecedorService } from '../services/fornecedor.service';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrl: './fornecedores.component.css'
})
export class FornecedoresComponent implements OnInit {

  public titulo = 'Cadatrar Produdos';
  public modeSave: 'salvar' | 'atualizar';
  public fornecedorForm: FormGroup;
  public fornecedorSelecionado: Fornecedor | null;
  public fornecedores: Fornecedor[];

  ngOnInit() {
    this.carregarfornecedores();
  }

  constructor(private fb: FormBuilder,
    private fornecedorService: FornecedorService) {
    this.criarFrom()
  }

  carregarfornecedores() {
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
    this.fornecedorForm = this.fb.group({
      id: [''],
      nomeRazaoSocial: ['', Validators.required],
      cnpj: ['', Validators.required],
      uf: ['', Validators.required],
      emailContato: ['', Validators.required],
      nomeContato: ['', Validators.required]
    });
  }

  salvarfornecedor(fornecedor: Fornecedor) {
    this.fornecedorService[this.modeSave](fornecedor).subscribe(
      (fornecedor: any) => {
        console.log(fornecedor)
        this.carregarfornecedores();
        this.voltar();
      },
      (erro: any) => {
        console.error(erro)
      }
    );
  }

  deletarfornecedor(id: number){

    debugger;

    this.fornecedorService.apagar(id).subscribe(
      (fornecedor: any) => {
        console.log(fornecedor)
        this.carregarfornecedores();
      },
      (erro: any) => {
        console.error(erro)
      }
    )
  }

  fornecedorSelect(fornecedor: Fornecedor) {
    this.modeSave = 'atualizar'
    this.fornecedorForm.patchValue(fornecedor);
    this.fornecedorSelecionado = fornecedor;
  }

  fornecedorSubmit() {
    this.salvarfornecedor(this.fornecedorForm.value);
  }

  fornecedorNovo() {
    this.modeSave = 'salvar'
    this.fornecedorSelecionado = new Fornecedor();
    this.fornecedorForm.patchValue(this.fornecedorSelecionado);
  }

  voltar() {
    this.fornecedorSelecionado = null;
  }
}

