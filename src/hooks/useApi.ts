import { useState, useEffect } from 'react'

interface UseApiOptions<T> {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: any
  headers?: Record<string, string>
  onSuccess?: (data: T) => void
  onError?: (error: Error) => void
  enabled?: boolean
  dependencies?: any[]
}

interface MutateOptions {
  body?: any
  headers?: Record<string, string>
}

export function useApi<T>(
  url: string, 
  options: UseApiOptions<T> = {}
) {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const {
    method = 'GET',
    body: initialBody,
    headers: initialHeaders = {},
    onSuccess,
    onError,
    enabled = true,
    dependencies = []
  } = options

  const fetchData = async (mutateOptions: MutateOptions = {}) => {
    try {
      setIsLoading(true)
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...initialHeaders,
          ...mutateOptions.headers
        },
        body: JSON.stringify(mutateOptions.body || initialBody)
      })
      
      if (!response.ok) {
        throw new Error(await response.text())
      }

      const result = response.status !== 204 ? await response.json() : null;
      setData(result)
      onSuccess?.(result)
      return result
    } catch (err) {
      const error = err instanceof Error ? err : new Error('An error occurred')
      setError(error)
      onError?.(error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (enabled && method === 'GET') {
      fetchData()
    }
  }, [url, enabled, method, ...dependencies])

  return {
    data,
    error,
    isLoading,
    mutate: fetchData
  }
} 