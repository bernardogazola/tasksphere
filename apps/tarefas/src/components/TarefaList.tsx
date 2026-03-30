import type { Tarefa, Status } from '@tasksphere/shared'
import { STATUS_OPTIONS } from '@tasksphere/shared'

interface Props {
  tarefas: Tarefa[]
  onStatusChange: (id: string, status: Status) => void
  onDelete: (id: string) => void
}

export default function TarefaList({ tarefas, onStatusChange, onDelete }: Props) {
  if (tarefas.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 text-center">
        <p className="text-gray-500 text-lg">Nenhuma tarefa cadastrada.</p>
        <p className="text-gray-400 text-sm mt-1">Clique em "Nova Tarefa" para começar.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Responsável</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {tarefas.map((tarefa) => (
            <tr key={tarefa.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="font-medium text-gray-800">{tarefa.titulo}</div>
                {tarefa.descricao && (
                  <div className="text-sm text-gray-500 mt-1">{tarefa.descricao}</div>
                )}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{tarefa.responsavel}</td>
              <td className="px-6 py-4">
                <select
                  value={tarefa.status}
                  onChange={(e) => onStatusChange(tarefa.id, e.target.value as Status)}
                  className="text-sm border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {STATUS_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => onDelete(tarefa.id)}
                  className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
