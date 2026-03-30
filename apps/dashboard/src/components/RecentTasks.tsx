import type { Tarefa } from '@tasksphere/shared'
import { STATUS_COLORS } from '@tasksphere/shared'

interface Props {
  tarefas: Tarefa[]
}

export default function RecentTasks({ tarefas }: Props) {
  const recent = [...tarefas]
    .sort((a, b) => new Date(b.atualizadoEm).getTime() - new Date(a.atualizadoEm).getTime())
    .slice(0, 5)

  if (recent.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Tarefas Recentes</h2>
        <p className="text-gray-500">Nenhuma tarefa cadastrada ainda.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Tarefas Recentes</h2>
      <ul className="space-y-3">
        {recent.map((tarefa) => {
          const colors = STATUS_COLORS[tarefa.status]
          return (
            <li key={tarefa.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
              <div>
                <p className="font-medium text-gray-800">{tarefa.titulo}</p>
                <p className="text-sm text-gray-500">{tarefa.responsavel}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
                {tarefa.status}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
