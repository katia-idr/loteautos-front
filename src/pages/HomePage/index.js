import Footer from '../../components/Footer'
import Header from '../../components/Header'
import logoAuto from '../../assets/images/logo_auto_2.png'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div className='HomePage'>
      <div className='header-container'>
        <Header />
      </div>

      <div className='img-container'>
        <img src={logoAuto} />
        <h1>Solución Lotes de Autos</h1>
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </div>
  )
}

export default Home
