import type { MembroEquipe } from '@tasksphere/shared'

const COLORS = [
  'bg-blue-500',
  'bg-green-500',
  'bg-purple-500',
  'bg-orange-500',
]

interface Props {
  membro: MembroEquipe
}

export default function MemberCard({ membro }: Props) {
  const colorIndex = parseInt(membro.id, 10) % COLORS.length
  const initials = membro.nome.charAt(0).toUpperCase()

  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
      <div
        className={`w-16 h-16 rounded-full ${COLORS[colorIndex]} flex items-center justify-center text-white text-2xl font-bold mb-4`}
      >
        {initials}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{membro.nome}</h3>
      <p className="text-sm text-gray-500 mt-1">{membro.papel}</p>
    </div>
  )
}
