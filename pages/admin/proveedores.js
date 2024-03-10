import { useContext, useEffect } from 'react'
import MenuAdmin from '../../containers/Admin'
import { validaToken } from '../../utils/validations/validaciones'
import { User } from '../../context/userProvider'

const Proveedores = () => {
  const { state } = useContext(User)
  useEffect(() => {
    validaToken(state, 'admin/proveedores')
  }, [state])
  return (
    <>
      <MenuAdmin idPestania='proveedores' />
    </>
  )
}

export default Proveedores
