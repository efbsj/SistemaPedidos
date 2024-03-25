export class Produto {

    constructor() {
        this.id = 0;
        this.descricao = '';
        this.dataCadastro = new Date;
        this.valorProduto = 0;
    }

    id: number;
    descricao: string;
    dataCadastro: Date;
    valorProduto: number;
}
