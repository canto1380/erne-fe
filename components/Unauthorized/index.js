import React, { useEffect, useState } from 'react'
import { Modal } from 'antd'
import { deleteCookies, deleteToken } from '../../helpers/herlpers'

const Unauthorized = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const redirectLogin = () => {
    deleteCookies()
    deleteToken()
    window.location.href = '/login'
  }
  useEffect(() => {
    setIsModalOpen(true)
  }, [])
  return (
    <div>
      <>
        <Modal
          title='Sesion Expirada'
          open={isModalOpen}
          closable={false}
          centered={true}
          cancelButtonProps={{ disabled: true }}
          okText='Redirigir ahora'
          onOk={redirectLogin}
        >
          <p>Su sesión ha expirado. Redirigiendo..</p>
        </Modal>
      </>
    </div>
  )
}

export default Unauthorized
