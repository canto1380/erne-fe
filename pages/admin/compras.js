import { useContext, useEffect } from 'react'
import MenuAdmin from '../../containers/Admin'
import { validaToken } from '../../utils/validations/validaciones'
import { User } from '../../context/userProvider'

const Compras = () => {
  const { state } = useContext(User)
  useEffect(() => {
    validaToken(state, 'admin/compras')
  }, [state])
  return (
    <>
      <MenuAdmin idPestania='compras' />
    </>
  )
}

export default Compras
