import { apiParams } from './api'

export const getUsuarios = async (params, token, usuario, role) => {
  try {
    const res = await apiParams('GET', params, `usuarios`, '', token)
    console.log(`QUERY:  ${res}`)
    console.log(res)
    if (res.status === 200) {
      const data = res?.data
      return data
    }
  } catch (error) {
    return error
  }
}
