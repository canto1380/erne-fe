import { api } from '../queryAPI/api'

const login = async (userLogin) => {
  try {
    const res = await api('POST', 'login', userLogin)

    return res
  } catch (error) {
    console.log('🚀 ~ file: login.js ~ line 15 ~ error', error)
  }
}

export default login
