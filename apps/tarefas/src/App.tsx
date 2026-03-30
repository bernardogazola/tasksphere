import { useState } from 'react'
import { useTarefas } from './hooks/useTarefas.ts'
import TarefaForm from './components/TarefaForm.tsx'
import TarefaList from './components/TarefaList.tsx'

export default function App() {
  const { tarefas, criar, atualizarStatus, remover } = useTarefas()
  const [showForm, setShowForm] = useState(false)

  function handleSubmit(data: { titulo: string; descricao: string; responsavel: string }) {
    criar(data)
    setShowForm(false)
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Gestão de Tarefas</h1>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            + Nova Tarefa
          </button>
        )}
      </div>
      {showForm && (
        <TarefaForm onSubmit={handleSubmit} onCancel={() => setShowForm(false)} />
      )}
      <TarefaList
        tarefas={tarefas}
        onStatusChange={atualizarStatus}
        onDelete={remover}
      />
    </div>
  )
}
