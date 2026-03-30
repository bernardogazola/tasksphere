interface Props {
  total: number
  concluidas: number
}

export default function ProgressBar({ total, concluidas }: Props) {
  const percentage = total > 0 ? Math.round((concluidas / total) * 100) : 0

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-gray-800">Progresso Geral</h2>
        <span className="text-2xl font-bold text-green-600">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-sm text-gray-500 mt-2">
        {concluidas} de {total} tarefas concluídas
      </p>
    </div>
  )
}
