import React, { useContext, useEffect } from 'react'
import { User } from '../../context/userProvider'
import { validaToken } from '../../utils/validations/validaciones'

const Admin = () => {
  const { state } = useContext(User)
  useEffect(() => {
    validaToken(state)
  }, [state])
  return (
    <div>
      <p>Panel admin</p>
    </div>
  )
}

export default Admin
