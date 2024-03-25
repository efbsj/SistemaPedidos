import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs-compat';
import { Fornecedor } from '../models/Fornecedor';


@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  baseURL = `${environment.mainUrlAPI}fornecedor`;

  constructor(private http: HttpClient) { }

  listar(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(`${this.baseURL}/Listar`);
  }

  obterPorId(id: number): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${this.baseURL}/obterPorId?Id=${id}`);
  }

  salvar(fornecedor: Fornecedor) {
    return this.http.post(`${this.baseURL}/salvar`, fornecedor);
  }

  atualizar(fornecedor: Fornecedor) {
    return this.http.put(`${this.baseURL}/Atualizar`, fornecedor);
  }

  apagar(id: number) {
    return this.http.delete(`${this.baseURL}/Apagar?Id=${id}`);
  }

}
