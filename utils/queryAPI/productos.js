import { apiParams } from './api'

export const getProductos = async (params, token) => {
  const res = await apiParams(
    'GET',
    params,
    `productos`,
    '',
    token,
    1,
    'ADMIN_ROLE'
  )
  if (res.status === 200) {
    const data = res?.data
    return data
  }
}
