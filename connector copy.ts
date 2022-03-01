import { getUser } from 'helpers/currentUser'
import { ReqResponse } from 'services/types'

const request = async <T>(
  path: string,
  { method, body }: RequestInit,
): Promise<ReqResponse<T>> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getUser()}`,
      },
      body: body,
    })

    const data =
      response.headers.get('Content-Type')?.includes('application/json') &&
      (await response.json())

    return {
      status: response.status,
      ok: response.ok,
      data,
    }
  } catch (error) {
    return {
      status: 500,
      ok: false,
      error,
    }
  }
}

export const connector = {
  get: async <TResponse>(path: string) => {
    return await request<TResponse>(path, { method: 'GET' })
  },
  post: async <TResponse, TBody>(path: string, payload: TBody) => {
    return await request<TResponse>(path, {
      method: 'POST',
      body: JSON.stringify(payload),
    })
  },
  put: async <TResponse, TBody>(path: string, payload: TBody) => {
    return await request<TResponse>(path, {
      method: 'PUT',
      body: JSON.stringify(payload),
    })
  },
  patch: async <TResponse, TBody>(path: string, payload: TBody) => {
    return await request<TResponse>(path, {
      method: 'PATCH',
      body: JSON.stringify(payload),
    })
  },
  delete: async <TResponse>(path: string) => {
    return await request<TResponse>(path, { method: 'DELETE' })
  },
}
