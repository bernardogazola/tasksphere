import React from 'react'
import RemoteWrapper from '../components/RemoteWrapper.tsx'

const EquipeApp = React.lazy(() => import('equipe/App'))

export default function EquipePage() {
  return (
    <RemoteWrapper>
      <EquipeApp />
    </RemoteWrapper>
  )
}
