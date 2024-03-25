import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Produto } from '../models/Produto';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs-compat';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseURL = `${environment.mainUrlAPI}produto`;

  constructor(private http: HttpClient) { }

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseURL}/Listar`);
  }

  obterPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseURL}/obterPorId?Id=${id}`);
  }

  salvar(produto: Produto) {
    return this.http.post(`${this.baseURL}/salvar`, produto);
  }

  atualizar(produto: Produto) {
    return this.http.put(`${this.baseURL}/Atualizar`, produto);
  }

  apagar(id: number) {
    return this.http.delete(`${this.baseURL}/Apagar?Id=${id}`);
  }

}
