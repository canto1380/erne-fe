import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/sandstone/bootstrap.min.css'
import '../styles/globals.css'
import UserProvider from '../context/userProvider'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
