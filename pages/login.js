import { useContext, useEffect } from 'react'
import { User } from '../context/userProvider'
import LoginContainer from '../containers/Login/index.js'
import { validaToken } from '../utils/validations/validaciones'
import { destroyCookies } from '../helpers/herlpers'

const Login = () => {
  const { state } = useContext(User)
  useEffect(() => {
    validaToken(state, 'admin/perfil')
  }, [state])
  return (
    <>
      <LoginContainer />
    </>
  )
}

export default Login
