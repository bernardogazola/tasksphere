import { Component, Suspense, type ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center">
          <p className="text-red-600 font-medium">Falha ao carregar o módulo remoto.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Tentar novamente
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

interface Props {
  children: ReactNode
}

export default function RemoteWrapper({ children }: Props) {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <div className="p-8 text-center text-gray-500">Carregando...</div>
        }
      >
        {children}
      </Suspense>
    </ErrorBoundary>
  )
}
