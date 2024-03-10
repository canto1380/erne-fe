import { useContext, useEffect } from 'react'
import MenuAdmin from '../../containers/Admin'
import { validaToken } from '../../utils/validations/validaciones'
import { User } from '../../context/userProvider'

const Sucursales = () => {
  const { state } = useContext(User)
  useEffect(() => {
    validaToken(state, 'admin/sucursales')
  }, [state])
  return (
    <>
      <MenuAdmin idPestania='sucursales' />
    </>
  )
}

export default Sucursales
