export type { Tarefa, MembroEquipe, Status } from './types.ts';
export { STATUS_OPTIONS, STATUS_COLORS, MEMBROS_EQUIPE, STORAGE_KEY } from './constants.ts';
export { getTarefas, addTarefa, updateTarefa, deleteTarefa, onTarefasUpdated } from './storage.ts';
