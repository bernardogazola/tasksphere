import type { MembroEquipe } from '@tasksphere/shared'
import MemberCard from './MemberCard.tsx'

interface Props {
  membros: MembroEquipe[]
}

export default function MemberGrid({ membros }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {membros.map((membro) => (
        <MemberCard key={membro.id} membro={membro} />
      ))}
    </div>
  )
}
