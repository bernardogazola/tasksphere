export type Status = 'Pendente' | 'Em Andamento' | 'Concluída';

export interface Tarefa {
  id: string;
  titulo: string;
  descricao: string;
  responsavel: string;
  status: Status;
  criadoEm: string;
  atualizadoEm: string;
}

export interface MembroEquipe {
  id: string;
  nome: string;
  papel: string;
}
