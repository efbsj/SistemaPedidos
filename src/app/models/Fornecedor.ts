export class Fornecedor {

    constructor() {
        this.id = 0;
        this.nomeRazaoSocial = '';
        this.uf = '';
        this.cnpj = '';
        this.emailContato = '';
        this.nomeContato = '';
    }

    id: number;
    nomeRazaoSocial: string;
    cnpj: string;
    uf: string;
    emailContato: string;
    nomeContato: string
}
