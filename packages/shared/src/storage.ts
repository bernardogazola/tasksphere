import type { Tarefa } from './types.ts';
import { STORAGE_KEY } from './constants.ts';

const EVENT_NAME = 'tasksphere:tarefas-updated';

export function getTarefas(): Tarefa[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveTarefas(tarefas: Tarefa[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas));
  window.dispatchEvent(new CustomEvent(EVENT_NAME));
}

export function addTarefa(tarefa: Tarefa): void {
  const tarefas = getTarefas();
  tarefas.push(tarefa);
  saveTarefas(tarefas);
}

export function updateTarefa(id: string, updates: Partial<Tarefa>): void {
  const tarefas = getTarefas();
  const index = tarefas.findIndex((t) => t.id === id);
  if (index !== -1) {
    tarefas[index] = {
      ...tarefas[index],
      ...updates,
      atualizadoEm: new Date().toISOString(),
    };
    saveTarefas(tarefas);
  }
}

export function deleteTarefa(id: string): void {
  const tarefas = getTarefas().filter((t) => t.id !== id);
  saveTarefas(tarefas);
}

export function onTarefasUpdated(callback: () => void): () => void {
  window.addEventListener(EVENT_NAME, callback);
  return () => window.removeEventListener(EVENT_NAME, callback);
}
