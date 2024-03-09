import { useContext, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import Title from '../components/Titulo'
import { User } from '../context/userProvider'
import { validaToken } from '../utils/validations/validaciones'

export default function Home({}) {
  // const { state } = useContext(User)

  // useEffect(() => {
  //   validaToken(state)
  // }, [state])
  return (
    <Layout>
      <Title title='inicio' />
    </Layout>
  )
}
