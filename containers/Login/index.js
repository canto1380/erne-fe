import { useState } from 'react'
import { validaClave, validaEmail } from '../../utils/validations/validaciones'
import loginAPI from '../../utils/authentication/login.js'
import Cookies from 'js-cookie'
import { setDataToken, setToken } from '../../helpers/herlpers'
import styles from './login.module.css'
import { Button, Form, Input, message } from 'antd'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'

export const COOKIES = {
  authToken: 'teorkneen',
  authId: 'idUser',
}

const LoginContainer = () => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (values) => {
    try {
      if (validaEmail(values.email) && validaClave(values.clave)) {
        login(values)
      } else {
        message.info('Datos incorrectos. Ingrese un mail y clave valida.', 4)
      }
    } catch (error) {
      message.info(error, 3)
    }
  }
  const login = async (values) => {
    try {
      const res = await loginAPI(values)
      if (res.status === 200) {
        const {
          token,
          datosUsuario: { idUsuario, nombreUsuario, role, email },
        } = res.data
        Cookies.set(COOKIES.authToken, token, process.env.REACT_APP_API, {
          expires: 1,
        })
        Cookies.set(COOKIES.authId, email, process.env.REACT_APP_API, {
          expires: 1,
        })
        setToken(res?.data?.token)
        setDataToken(res?.data?.datosUsuario)

        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 3000)
        setTimeout(() => {
          window.location.href = '/admin/perfil'
        }, 3000)
      }
      if (res?.response?.status === 404) {
        message.info(res?.response?.data?.error, 3)
      }
    } catch (error) {
      message.info(error, 3)
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={`${styles.containerLogin}`}>
      <Container>
        <Row className='justify-content-center align-items-center pb-3'>
          <Col
            xs={10}
            sm={8}
            md={6}
            className={`justify-content-center text-center`}
          >
            <h1 className={`${styles.titlePage}`}>Negocio nombre</h1>
          </Col>
        </Row>

        <Row className='justify-content-center align-items-center'>
          <Col xs={10} sm={8} md={6} className={`${styles.containerForm}`}>
            <div
              className={`d-flex justify-content-between align-items-center pb-4`}
            >
              <div className=''>
                <h2 className={`${styles.titleLogin}`}>Inciar sesión</h2>
              </div>
              <div>
                <Image
                  src='/images/logo.png'
                  alt='Negocio'
                  height='50'
                  width='50'
                />
              </div>
            </div>
            <Form
              name='basic'
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 17 }}
              initialValues={{ remember: true }}
              onFinish={handleSubmit}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <Form.Item
                label='Usuario'
                name='email'
                rules={[
                  {
                    required: true,
                    message: 'Debe ingresar un email!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='Clave'
                name='clave'
                rules={[{ required: true, message: 'Debe ingresar su clave!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 10, span: 16 }} className='pt-4'>
                {loading ? (
                  <Button disabled type='primary' htmlType='submit'>
                    <Spinner
                      as='span'
                      animation='border'
                      size='sm'
                      role='status'
                      aria-hidden='true'
                    />
                    <span className='ms-2'>Ingresando</span>
                  </Button>
                ) : (
                  <Button type='primary' htmlType='submit'>
                    Ingresar
                  </Button>
                )}
              </Form.Item>
            </Form>
            <div className='text-center'>
              <Link
                className={`${styles.btnRestorePass}`}
                href={'/admin/recuperar-clave'}
              >
                Olvidó su contraseña? Click AQUI
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LoginContainer
