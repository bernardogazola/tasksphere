import type { MembroEquipe, Status } from './types.ts';

export const STATUS_OPTIONS: Status[] = ['Pendente', 'Em Andamento', 'Concluída'];

export const STATUS_COLORS: Record<Status, { bg: string; text: string }> = {
  'Pendente': { bg: 'bg-yellow-100', text: 'text-yellow-800' },
  'Em Andamento': { bg: 'bg-blue-100', text: 'text-blue-800' },
  'Concluída': { bg: 'bg-green-100', text: 'text-green-800' },
};

export const MEMBROS_EQUIPE: MembroEquipe[] = [
  { id: '1', nome: 'Bernardo', papel: 'Desenvolvedor Frontend' },
  { id: '2', nome: 'Emmanuel', papel: 'Desenvolvedor Frontend' },
  { id: '3', nome: 'Misael', papel: 'Desenvolvedor Frontend' },
  { id: '4', nome: 'Otávio', papel: 'Desenvolvedor Frontend' },
];

export const STORAGE_KEY = 'tasksphere:tarefas';
