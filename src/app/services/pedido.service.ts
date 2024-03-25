import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pedido } from '../models/Pedido';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs-compat';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  baseURL = `${environment.mainUrlAPI}pedido`;

  constructor(private http: HttpClient) { }

  listar(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.baseURL}/Listar`);
  }

  ListarPorCnpjFornecedor(cnpj: string): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.baseURL}/ListarPorCnpjFornecedor?cnpj=${cnpj}`);
  }

  obterPorId(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.baseURL}/obterPorId?Id=${id}`);
  }

  salvar(pedido: Pedido) {
    return this.http.post(`${this.baseURL}/salvar`, pedido);
  }

  atualizar(pedido: Pedido) {
    return this.http.put(`${this.baseURL}/Atualizar`, pedido);
  }

  apagar(id: number) {
    return this.http.delete(`${this.baseURL}/Apagar?Id=${id}`);
  }

}
