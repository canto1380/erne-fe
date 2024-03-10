import { useContext, useEffect } from 'react'
import { User } from '../../context/userProvider'
import { validaToken } from '../../utils/validations/validaciones'
import MenuAdmin from '../../containers/Admin'

const Admin = () => {
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

export default Admin
