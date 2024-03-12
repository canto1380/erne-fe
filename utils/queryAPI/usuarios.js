import { apiParams } from './api'

export const getUsuarios = async (params, token, usuario, role) => {
  try {
    const res = await apiParams('GET', params, `usuarioss`, '', token)
    console.log(`QUERY:  ${res}`)
    console.log(res)
    return res
    // if (res.status === 200) {
    //   const data = res?.data
    //   return data
    // }
  } catch (error) {
    console.log(error)
    return error
  }
}
