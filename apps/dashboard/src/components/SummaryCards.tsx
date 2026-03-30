interface Props {
  total: number
  pendentes: number
  emAndamento: number
  concluidas: number
}

export default function SummaryCards({ total, pendentes, emAndamento, concluidas }: Props) {
  const cards = [
    { label: 'Total de Tarefas', value: total, borderColor: 'border-gray-500', bgColor: 'bg-gray-50' },
    { label: 'Pendentes', value: pendentes, borderColor: 'border-yellow-500', bgColor: 'bg-yellow-50' },
    { label: 'Em Andamento', value: emAndamento, borderColor: 'border-blue-500', bgColor: 'bg-blue-50' },
    { label: 'Concluídas', value: concluidas, borderColor: 'border-green-500', bgColor: 'bg-green-50' },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className={`${card.bgColor} rounded-xl shadow-md p-5 border-l-4 ${card.borderColor}`}
        >
          <p className="text-sm text-gray-600 font-medium">{card.label}</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">{card.value}</p>
        </div>
      ))}
    </div>
  )
}
