import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { BsFillCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import { deleteCookies, deleteToken } from '../../helpers/herlpers'
import { itemsSideBar } from './ItemsSidebar'
import Link from 'next/link'
import styles from './sidebar.module.css'

const Sidebar = ({ inactivo, setInactivo, dataAuth }) => {
  const [initial, setInitial] = useState('')
  const [initialSurname, setInitialSurname] = useState('')

  const cerrarSesion = async (e) => {
    deleteToken()
    deleteCookies()
    window.location.href = '/login'
  }

  useEffect(() => {
    const a = dataAuth?.nombre?.toUpperCase()
    const b = dataAuth?.apellido?.toUpperCase()
    setInitial(a?.substr(0, 1))
    setInitialSurname(b?.substr(0, 1))
  }, [dataAuth])

  return (
    <div
      className={`${
        inactivo
          ? `${styles.sidebarInactivo} text-light bg-dark h-100`
          : `${styles.sidebar} text-light bg-dark h-100`
      }`}
    >
      <Row
        className={`${
          inactivo
            ? 'pt-4 pb-2 d-flex justify-content-center align-items-center m-0'
            : 'pt-4 pb-2 d-flex justify-content-center align-items-center m-0'
        }`}
      >
        <Col
          xs={3}
          className={` ${
            inactivo
              ? `justify-content-center px-0 ${styles.imgContainer}`
              : `text-center px-0`
          }`}
        >
          <div className={`${styles.imgProfile} text-center`}>
            {initial}
            {initialSurname}
          </div>
        </Col>
        <Col xs={6} className='px-1'>
          <p className={`${inactivo ? `${styles.inactivo}` : 'mb-0'}`}>
            {dataAuth?.nombreUsuario?.substr(0, 10)}
          </p>
        </Col>

        {inactivo ? (
          <Col
            xs={12}
            className={`text-light mt-3 text-center px-0`}
            onClick={() => setInactivo(!inactivo)}
          >
            {
              <BsFillCaretRightFill
                title='Desplegar'
                className={`${styles.sizeIcon} ${styles.cursorPointer}`}
              />
            }
          </Col>
        ) : (
          <Col
            xs={2}
            className={`p-0 text-light`}
            onClick={() => setInactivo(!inactivo)}
          >
            {
              <BsFillCaretLeftFill
                title='Minimizar'
                className={`${styles.sizeIcon} ${styles.cursorPointer}`}
              />
            }
          </Col>
        )}
      </Row>
      <hr />
      <ul className='text-decoration-none list-unstyled sidebarList'>
        {itemsSideBar.map((items, i) => (
          <Link
            key={i}
            className='text-white text-decoration-none'
            href={`/admin/${items.title}`}
          >
            <li
              title={items.title}
              className={`${
                inactivo
                  ? `${styles.sidebarListRow} d-flex justify-content-center align-items-center`
                  : `${styles.sidebarListRow} d-flex justify-content-start px-3 align-items-center`
              }`}
            >
              <div className=''>{items.iconName}</div>
              <div className={` ${inactivo ? `${styles.inactivo}` : 'ms-3'}`}>
                {items.name}
              </div>
            </li>
          </Link>
        ))}

        <li
          onClick={() => cerrarSesion()}
          title='Salir'
          className={`${
            inactivo
              ? `${styles.sidebarListRow} d-flex justify-content-center align-items-center`
              : `${styles.sidebarListRow} d-flex justify-content-start px-3 align-items-center`
          }`}
        >
          <div className=''>
            <BiLogOut className={`${styles.sizeIcon}`} />
          </div>
          <div className={` ${inactivo ? `${styles.inactivo}` : 'ms-3'}`}>
            Salir
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
