import { useFetch, useCookie, useRuntimeConfig } from '#app'
import type { UseFetchOptions } from 'nuxt/app'

export const useApiFetch = <DataT = unknown>(request: string, options?: UseFetchOptions<DataT>) => {
  const config = useRuntimeConfig()
  const authToken = useCookie<string | null>('authToken')

  if (!config.public.apiBaseUrl) {
    throw new Error('API_BASE_URL is not set')
  }

  const defaults: UseFetchOptions<DataT> = {
    baseURL: config.public.apiBaseUrl,
    key: request + JSON.stringify(options?.params), // нужно для кеширования
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken.value ? `Bearer ${authToken.value}` : config.public.apiToken,
    },
  }

  const params = { ...defaults, ...options }

  return useFetch(request, params)
}
