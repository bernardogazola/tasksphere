import { MEMBROS_EQUIPE } from '@tasksphere/shared'
import MemberGrid from './components/MemberGrid.tsx'

export default function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Nossa Equipe</h1>
      <p className="text-gray-600 mb-8">
        Conheça os integrantes do projeto TaskSphere.
      </p>
      <MemberGrid membros={MEMBROS_EQUIPE} />
    </div>
  )
}
