import { apiParams } from './api'

export const getUsuarios = async (params, token, usuario, role) => {
  const res = await apiParams('GET', params, `usuarios`, '', token)
  if (res.status === 200) {
    const data = res?.data
    return data
  }
}
