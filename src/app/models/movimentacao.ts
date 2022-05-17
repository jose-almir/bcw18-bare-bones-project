export interface Movimentacao {
  titulo: string;
  total: number;
  tipo: TipoMovimentacao;
}

export enum TipoMovimentacao {
  DESPESA,
  RECEITA,
}
