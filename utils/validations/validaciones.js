import { redirectBase } from '../../helpers/redirect.js'
import {emailER, claveER} from '../regularExpression.js'

export const validaEmail = (email) => {
  if(email.trim() !== '' && emailER.test(email)) return true
    return false
}

export const validaClave = (clave) => {
  if(clave.trim() !== '' && claveER.test(clave)) return true
    return false
}

export const validaToken =(state) => {
  if (!state.userToken || state.userToken.length === 0) {
    redirectBase('login')
  } else {
    redirectBase('admin')
  }
}