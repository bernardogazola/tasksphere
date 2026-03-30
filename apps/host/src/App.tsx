import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import HomePage from './pages/HomePage.tsx'
import TarefasPage from './pages/TarefasPage.tsx'
import DashboardPage from './pages/DashboardPage.tsx'
import EquipePage from './pages/EquipePage.tsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/tarefas" element={<TarefasPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/equipe" element={<EquipePage />} />
      </Route>
    </Routes>
  )
}
