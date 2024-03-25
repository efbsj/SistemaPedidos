import { Fornecedor } from "./Fornecedor";
import { Produto } from "./Produto";

export class Pedido {

    constructor() {
        this.id = 0;
        this.fornecedorId = 0;
        this.fornecedor = new Fornecedor;
        this.produtoId = 0;
        this.produto = new Produto;
        this.dataPedido = new Date;
        this.quantidadeProdutos = 0;
        this.valorTotalPedido = 0;
    }

    id: number;
    fornecedorId: number;
    fornecedor: Fornecedor;
    produtoId: number;
    produto: Produto;
    dataPedido: Date;
    quantidadeProdutos: number;
    valorTotalPedido: number;
}
