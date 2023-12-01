import Image from 'next/image'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './header'
import Menu from './menu';
import Homepage from './homepage';
import Footer from './footer'
import Login from './login'
import SignUp from './singup'

export default function Home() {
  return (
    <>
      <Header/>
      <Menu/>
      <Homepage/>
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <Footer/> */}
    </>
  )
}
