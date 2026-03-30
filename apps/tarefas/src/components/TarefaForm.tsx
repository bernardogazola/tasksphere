import { useState } from 'react'
import { MEMBROS_EQUIPE } from '@tasksphere/shared'

interface Props {
  onSubmit: (data: { titulo: string; descricao: string; responsavel: string }) => void
  onCancel: () => void
}

export default function TarefaForm({ onSubmit, onCancel }: Props) {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [responsavel, setResponsavel] = useState(MEMBROS_EQUIPE[0].nome)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!titulo.trim()) return
    onSubmit({ titulo: titulo.trim(), descricao: descricao.trim(), responsavel })
    setTitulo('')
    setDescricao('')
    setResponsavel(MEMBROS_EQUIPE[0].nome)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Nova Tarefa</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">
            Título *
          </label>
          <input
            id="titulo"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Digite o título da tarefa"
            required
          />
        </div>
        <div>
          <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">
            Descrição
          </label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Descreva a tarefa"
            rows={3}
          />
        </div>
        <div>
          <label htmlFor="responsavel" className="block text-sm font-medium text-gray-700 mb-1">
            Responsável
          </label>
          <select
            id="responsavel"
            value={responsavel}
            onChange={(e) => setResponsavel(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {MEMBROS_EQUIPE.map((m) => (
              <option key={m.id} value={m.nome}>
                {m.nome}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Criar Tarefa
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Cancelar
          </button>
        </div>
      </div>
    </form>
  )
}
