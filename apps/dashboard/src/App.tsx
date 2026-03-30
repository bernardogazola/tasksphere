import { useTarefas } from './hooks/useTarefas.ts'
import SummaryCards from './components/SummaryCards.tsx'
import ProgressBar from './components/ProgressBar.tsx'
import RecentTasks from './components/RecentTasks.tsx'

export default function App() {
  const tarefas = useTarefas()

  const total = tarefas.length
  const pendentes = tarefas.filter((t) => t.status === 'Pendente').length
  const emAndamento = tarefas.filter((t) => t.status === 'Em Andamento').length
  const concluidas = tarefas.filter((t) => t.status === 'Concluída').length

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <SummaryCards
        total={total}
        pendentes={pendentes}
        emAndamento={emAndamento}
        concluidas={concluidas}
      />
      <ProgressBar total={total} concluidas={concluidas} />
      <RecentTasks tarefas={tarefas} />
    </div>
  )
}
