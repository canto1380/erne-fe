import { useContext, useEffect } from 'react'
import MenuAdmin from '../../containers/Admin'
import { validaToken } from '../../utils/validations/validaciones'
import { User } from '../../context/userProvider'

const Ventas = () => {
  const { state } = useContext(User)
  useEffect(() => {
    validaToken(state, 'admin/ventas')
  }, [state])
  return (
    <>
      <MenuAdmin idPestania='ventas' />
    </>
  )
}

export default Ventas
