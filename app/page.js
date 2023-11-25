import Image from 'next/image'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './header'
import Footer from './footer'
import Login from './login'

export default function Home() {
  return (
    <>
      <Header/>
      <Login/>
      <Footer/>
    </>
  )
}
