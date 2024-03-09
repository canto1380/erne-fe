import { useContext, useEffect } from 'react'
import { User } from '../context/userProvider'
import LoginContainer from '../containers/Login/Login'
import { redirectBase } from '../helpers/redirect'
import { validaToken } from '../utils/validations/validaciones'

const Login = () => {
  const { state } = useContext(User)

  useEffect(() => {
    validaToken(state)
  }, [state])
  return (
    <>
      <LoginContainer />
    </>
  )
}

export default Login