import React from 'react'
import RemoteWrapper from '../components/RemoteWrapper.tsx'

const DashboardApp = React.lazy(() => import('dashboard/App'))

export default function DashboardPage() {
  return (
    <RemoteWrapper>
      <DashboardApp />
    </RemoteWrapper>
  )
}
