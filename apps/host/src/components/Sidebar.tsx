import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Início' },
  { to: '/tarefas', label: 'Tarefas' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/equipe', label: 'Equipe' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold tracking-wide">TaskSphere</h1>
        <p className="text-gray-400 text-xs mt-1">Gestão de Tarefas</p>
      </div>
      <nav className="flex-1 px-4">
        <ul className="space-y-1">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 text-xs text-gray-500">
        TaskSphere v1.0
      </div>
    </aside>
  )
}
