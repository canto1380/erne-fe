
import { useContext, useEffect, useState } from 'react'
import { User } from '../../context/userProvider'
import { validaToken } from '../../utils/validations/validaciones'
import MenuAdmin from '../../containers/Admin'
import { Container } from 'react-bootstrap'

const Perfil = () => {
  const { state } = useContext(User)

  useEffect(() => {
    validaToken(state, 'admin/perfil')
  }, [state])


  return (
    <>
      <MenuAdmin idPestania='perfil' />
      <Container fluid className='container-admin-data'>

      </Container>
    </>
  )
}

// export const getServerSideProps = async (ctx) => {
//   const tokenCOOKIES = getTokenCOOKIES(ctx)
//   const idCOOKIES = getUserCOOKIES(ctx)

//   const params = { search: idCOOKIES }
//   const res = await getUsuarios(params, tokenCOOKIES)

//   if (res) {
//     const { rows } = res
//     return {
//       props: {
//         userInfo: rows[0],
//       },
//     }
//   } else {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     }
//   }
// }

export default Perfil
