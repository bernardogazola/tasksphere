import { useState, useEffect, useCallback } from 'react'
import {
  getTarefas,
  addTarefa as addTarefaStorage,
  updateTarefa as updateTarefaStorage,
  deleteTarefa as deleteTarefaStorage,
  onTarefasUpdated,
} from '@tasksphere/shared'
import type { Tarefa, Status } from '@tasksphere/shared'

export function useTarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>(getTarefas)

  useEffect(() => {
    return onTarefasUpdated(() => {
      setTarefas(getTarefas())
    })
  }, [])

  const criar = useCallback((data: { titulo: string; descricao: string; responsavel: string }) => {
    const now = new Date().toISOString()
    const tarefa: Tarefa = {
      id: crypto.randomUUID(),
      ...data,
      status: 'Pendente',
      criadoEm: now,
      atualizadoEm: now,
    }
    addTarefaStorage(tarefa)
  }, [])

  const atualizarStatus = useCallback((id: string, status: Status) => {
    updateTarefaStorage(id, { status })
  }, [])

  const remover = useCallback((id: string) => {
    deleteTarefaStorage(id)
  }, [])

  return { tarefas, criar, atualizarStatus, remover }
}
