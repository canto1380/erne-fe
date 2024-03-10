import { useContext, useEffect } from 'react'
import MenuAdmin from '../../containers/Admin'
import { validaToken } from '../../utils/validations/validaciones'
import { User } from '../../context/userProvider'

const Productos = () => {
  const { state } = useContext(User)
  useEffect(() => {
    validaToken(state, 'admin/productos')
  }, [state])
  return (
    <>
      <MenuAdmin idPestania='productos'/>
    </>
  )
}

export default Productos
