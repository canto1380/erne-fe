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
import { api } from '../../utils/queryAPI/api'
import { getUsuarios } from '../../utils/queryAPI/usuarios'
import { useContext, useEffect } from 'react'
import { User } from '../../context/userProvider'
import { validaToken } from '../../utils/validations/validaciones'
import MenuAdmin from '../../containers/Admin'

const Perfil = ({ userInfo }) => {
  const { state } = useContext(User)
  useEffect(() => {
    validaToken(state, 'admin/perfil')
  }, [state])
  return (
    <>
      <MenuAdmin idPestania='perfil'/>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const tokenCOOKIES = getTokenCOOKIES(ctx)
  const idCOOKIES = getUserCOOKIES(ctx)

  const params = { search: idCOOKIES }
  const res = await getUsuarios(params, tokenCOOKIES)
  if (res) {
    const { rows } = res
    return {
      props: {
        userInfo: rows[0],
      },
    }
  } else {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
}

export default Perfil
