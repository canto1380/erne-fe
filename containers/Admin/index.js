import { useState, useEffect, useContext } from 'react'
import { Container } from 'react-bootstrap'
import { getDataToken } from '../../helpers/herlpers'
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
import Unauthorized from '../../components/Unauthorized'
import { User } from '../../context/userProvider'
import { getUsuarios } from '../../utils/queryAPI/usuarios'

const MenuAdmin = ({ idPestania }) => {
  const [inactivo, setInactivo] = useState(false)
  const [dataAuth, setDataAuth] = useState([])
  const [modalUnauthorized, setModalUnauthorized] = useState(false)

  const { state } = useContext(User)

  useEffect(() => {
    datosUsuario()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])
  const datosUsuario = async () => {
    const idUser = getDataToken()
    console.log(idUser)
    if (idUser !== null) {
      const params = { search: idUser.idUsuario }
      const data = await getUsuarios(params, state.userToken)
      if (data.rows.length === 0) {
        setModalUnauthorized(true)
      } else {
        setDataAuth(data.rows[0])
      }
    } else {
      setModalUnauthorized(true)
    }
  }

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
        {modalUnauthorized && (
          <div className=''>
            <Unauthorized />
          </div>
        )}
      </Container>
    </Container>
  )
}

export default MenuAdmin
