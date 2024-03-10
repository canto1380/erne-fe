import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { getDataToken } from '../../helpers/herlpers'
import { html } from '../../components/Sidebar/ItemsSidebar'
import Sidebar from '../../components/Sidebar/Sidebar'
import styles from '../../components/Sidebar/sidebar.module.css'
import PerfilContainer from './perfil'
import VentasContainer from './ventas'
import ClientesContainer from './clientes'
import ProveedoresContainer from './proveedores'
import SucursalesContainer from './sucursales'
import StockContainer from './stock'
import ProductosContainer from './productos'
import ComprasContainer from './compras'

const MenuAdmin = ({ idPestania }) => {
  const [inactivo, setInactivo] = useState(false)
  const [dataAuth, setDataAuth] = useState([])

  useEffect(() => {
    setDataAuth(getDataToken)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let html
  switch (idPestania) {
    case 'perfil':
      html = (
        <div className={`${inactivo ? styles.parte2Inactivo : styles.parte2}`}>
          <PerfilContainer />
        </div>
      )
      break
    case 'ventas':
      html = (
        <div className={`${inactivo ? styles.parte2Inactivo : styles.parte2}`}>
          <VentasContainer />
        </div>
      )
      break

    case 'compras':
      html = (
        <div className={`${inactivo ? styles.parte2Inactivo : styles.parte2}`}>
          <ComprasContainer />
        </div>
      )
      break

    case 'clientes':
      html = (
        <div className={`${inactivo ? styles.parte2Inactivo : styles.parte2}`}>
          <ClientesContainer />
        </div>
      )
      break
    case 'proveedores':
      html = (
        <div className={`${inactivo ? styles.parte2Inactivo : styles.parte2}`}>
          <ProveedoresContainer />
        </div>
      )
      break
    case 'sucursales':
      html = (
        <div className={`${inactivo ? styles.parte2Inactivo : styles.parte2}`}>
          <SucursalesContainer />
        </div>
      )
      break
    case 'stock':
      html = (
        <div className={`${inactivo ? styles.parte2Inactivo : styles.parte2}`}>
          <StockContainer />
        </div>
      )
      break
    case 'productos':
      html = (
        <div className={`${inactivo ? styles.parte2Inactivo : styles.parte2}`}>
          <ProductosContainer />
        </div>
      )
      break
  }

  return (
    <Container
      fluid
      className='containerAdmin p-0 d-flex justify-content-start'
    >
      <Sidebar
        inactivo={inactivo}
        setInactivo={setInactivo}
        dataAuth={dataAuth}
      />
      <Container fluid className='containerAdminData'>
        {html}
        {/* {modalUnauthorized && (
          <div className=''>
            <Unauthorized />
          </div>
        )} */}
      </Container>
    </Container>
  )
}

export default MenuAdmin
