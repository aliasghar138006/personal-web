import '../styles/globals.css'
import 'react-quill/dist/quill.snow.css'
import Layout from '../components/Layout/Layout'
import Context from '../context/Context'


function MyApp({ Component, pageProps}) {
  return (
    <Context>
      <Layout>
      <Component  {...pageProps} />
      </Layout>
    </Context>
  )
}



export default MyApp
