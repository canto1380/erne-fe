import { useContext, useEffect } from 'react'
import MenuAdmin from '../../containers/Admin'
import { validaToken } from '../../utils/validations/validaciones'
import { User } from '../../context/userProvider'

const Clientes = () => {
  const { state } = useContext(User)
  useEffect(() => {
    validaToken(state, 'admin/clientes')
  }, [state])
  return (
    <>
      <MenuAdmin idPestania='clientes' />
    </>
  )
}

export default Clientes
