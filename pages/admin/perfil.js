import { destroyCookie } from 'nookies'
import {
  deleteCookies,
  deleteToken,
  getDataToken,
  getIdUserCOOKIES,
  getToken,
  getTokenCOOKIES,
  getUserCOOKIES,
} from '../../helpers/herlpers'
import { api, apiParams } from '../../utils/queryAPI/api'
import { getUsuarios } from '../../utils/queryAPI/usuarios'
import { useContext, useEffect } from 'react'
import { User } from '../../context/userProvider'
import { validaToken } from '../../utils/validations/validaciones'
import MenuAdmin from '../../containers/Admin'
import axios from 'axios'
import { getProductos } from '../../utils/queryAPI/productos'

const Perfil = ({ userInfo, token }) => {
  // console.log(userInfo?.rows[0])
  console.log(userInfo)
  const { state } = useContext(User)
  useEffect(() => {
    validaToken(state, 'admin/perfil')
  }, [state])

  useEffect(() => {
    gettt()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const gettt = async () => {
    const aa = await getProductos(undefined, token)
    console.log(aa)
  }
  return (
    <>
      <MenuAdmin idPestania='perfil' />
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const tokenCOOKIES = getTokenCOOKIES(ctx)
  const idCOOKIES = getUserCOOKIES(ctx)

  const params = { search: idCOOKIES }
  const res = await getUsuarios(params, tokenCOOKIES)
  console.log(res)
  // const res = await apiParams('GET', params, `usuarios/`, '', tokenCOOKIES)
  return {
    props: {
      token: tokenCOOKIES,
      userInfo: res?.rows[0],
    },
  }
  // if (res) {
  //   const { rows } = res
  //   return {
  //     props: {
  //       userInfo: rows[0],
  //     },
  //   }
  // } else {
  //   return {
  //     redirect: {
  //       destination: '/login',
  //       permanent: false,
  //     },
  //   }
  // }
}

export default Perfil
