"use client"

import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-red-400">Something went wrong</h2>
            <p className="text-gray-400">
              We're sorry, but something unexpected happened. Please refresh the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary