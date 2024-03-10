import {
  deleteCookies,
  deleteToken,
  getTokenCOOKIES,
} from '../../helpers/herlpers.js'
import { redirectBase } from '../../helpers/redirect.js'
import { emailER, claveER } from '../regularExpression.js'

export const validaEmail = (email) => {
  if (email.trim() !== '' && emailER.test(email)) return true
  return false
}

export const validaClave = (clave) => {
  if (clave.trim() !== '' && claveER.test(clave)) return true
  return false
}

export const validaToken = (state, path) => {
  const getTokencoo = getTokenCOOKIES()
  if (
    !state.userToken ||
    state.userToken.length === 0 ||
    state.userToken !== getTokencoo
  ) {
    deleteToken()
    deleteCookies()
    redirectBase('login')
  } else {
    redirectBase(path)
  }
}
