import { useContext, useEffect } from 'react'
import { User } from '../../context/userProvider'
import { validaToken } from '../../utils/validations/validaciones'

const Admin = () => {
  const { state } = useContext(User)
  useEffect(() => {
    validaToken(state, 'admin/perfil')
  }, [state])
  return (
    <div>
      <p>Panel admin</p>
    </div>
  )
}

export default Admin
