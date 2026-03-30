import { useState, useEffect } from 'react'
import { getTarefas, onTarefasUpdated } from '@tasksphere/shared'
import type { Tarefa } from '@tasksphere/shared'

export function useTarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>(getTarefas)

  useEffect(() => {
    return onTarefasUpdated(() => {
      setTarefas(getTarefas())
    })
  }, [])

  return tarefas
}
