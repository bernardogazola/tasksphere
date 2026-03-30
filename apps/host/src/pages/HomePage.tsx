import { Link } from 'react-router-dom'

const cards = [
  {
    to: '/tarefas',
    title: 'Gestão de Tarefas',
    description: 'Cadastre, edite e acompanhe suas tarefas.',
    color: 'border-blue-500 bg-blue-50',
  },
  {
    to: '/dashboard',
    title: 'Dashboard',
    description: 'Visualize o progresso e resumo das atividades.',
    color: 'border-green-500 bg-green-50',
  },
  {
    to: '/equipe',
    title: 'Equipe',
    description: 'Conheça os integrantes do projeto.',
    color: 'border-purple-500 bg-purple-50',
  },
]

export default function HomePage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Bem-vindo ao TaskSphere
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Gerencie as tarefas da sua equipe de forma simples e organizada.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className={`block rounded-xl shadow-md p-6 border-l-4 ${card.color} hover:shadow-lg transition-shadow`}
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {card.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm">{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
