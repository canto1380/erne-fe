import { useContext, useEffect } from 'react'
import MenuAdmin from '../../containers/Admin'
import { validaToken } from '../../utils/validations/validaciones'
import { User } from '../../context/userProvider'

const Stock = () => {
  const { state } = useContext(User)
  useEffect(() => {
    validaToken(state, 'admin/stock')
  }, [state])
  return (
    <>
      <MenuAdmin idPestania='stock' />
    </>
  )
}

export default Stock
