import { useLocation } from 'react-router-dom'

const titles: Record<string, string> = {
  '/': 'Início',
  '/tarefas': 'Gestão de Tarefas',
  '/dashboard': 'Dashboard',
  '/equipe': 'Equipe',
}

export default function Header() {
  const location = useLocation()
  const title = titles[location.pathname] ?? 'TaskSphere'

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
    </header>
  )
}
