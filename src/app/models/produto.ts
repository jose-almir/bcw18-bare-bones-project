export interface Produto {
    imagem: string;
    nomeDoProduto: string;
    descricao: string;
    preco: number;
    emPromocao: boolean;
    desconto: number; // 0..1
    categoria: CategoriaProduto;
}

export enum CategoriaProduto {
    ELETRO = 'eletro',
    MOVEIS = 'moveis',
    LIMPEZA = 'limpeza'
}