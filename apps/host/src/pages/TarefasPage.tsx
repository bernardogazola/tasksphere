import React from 'react'
import RemoteWrapper from '../components/RemoteWrapper.tsx'

const TarefasApp = React.lazy(() => import('tarefas/App'))

export default function TarefasPage() {
  return (
    <RemoteWrapper>
      <TarefasApp />
    </RemoteWrapper>
  )
}
