import Cookies from 'js-cookie'
import serverCookies from 'cookies'
import clientCookies from 'js-cookie'
import { destroyCookie } from 'nookies'

export const setDataToken = (data) => {
  return localStorage.setItem('DSTY-$EPP#', JSON.stringify(data))
}
export const getDataToken = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('DSTY-$EPP#'))
  }
}
export const setToken = (token) => {
  return localStorage.setItem('DSTYTOK-$EPP#', JSON.stringify(token))
}
export const getToken = () => {
  if (typeof window !== 'undefined') {
    let aa = localStorage.getItem('DSTYTOK-$EPP#')
    if (aa !== null) {
      aa = aa.replace(/['"]+/g, '')
      return aa
    }
  }
}

export const getTokenCOOKIES = (ctx) => {
  let token
  if (ctx) {
    const { req, res } = ctx
    const cookies = new serverCookies(req, res)
    token = cookies.get('teorkneen')
  } else {
    token = clientCookies.get('teorkneen')
  }
  return token || null
}

export const getUserCOOKIES = (ctx) => {
  let idUser
  if (ctx) {
    const { req, res } = ctx
    const cookies = new serverCookies(req, res)
    idUser = cookies.get('idUser')
  } else {
    idUser = clientCookies.get('idUser')
  }

  return idUser || null
}

export const deleteToken = () => {
  localStorage.removeItem('DSTY-$EPP#')
  return localStorage.removeItem('DSTYTOK-$EPP#')
}

export const deleteCookies = () => {
  Cookies.remove('teorkneen')
  Cookies.remove('idUser')
}
export const destroyCookies = () => {
  destroyCookie(null, 'teorkneen')
  destroyCookie(null, 'idUser')
}

export const quitarAcentos = (palabra) => {
  return palabra.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
export const convertirAPrimitiva = (palabra) => {
  let p = quitarAcentos(palabra)
  return p.toLowerCase()
}
