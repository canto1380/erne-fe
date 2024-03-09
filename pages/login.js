import { useContext, useEffect } from 'react'
import { User } from '../context/userProvider'
import LoginContainer from '../containers/Login/index.js'
import { validaToken } from '../utils/validations/validaciones'

const Login = () => {
  const { state } = useContext(User)

  useEffect(() => {
    validaToken(state)
  }, [state])
  return (
    <p>
      asdas
      {/* <LoginContainer /> */}
    </p>
  )
}

export default  Login
