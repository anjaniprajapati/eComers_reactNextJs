'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './header'
import Menu from './menu';
import Slider from './slider';
import Cloths from './women_cloths';
import Jewelery from './jwelery';
import Electronic from './electronic'
import MensCloths from './mens_cloth'
import Footer from './footer'
import Login from './login'
import SignUp from './singup'


export default function Home() {

  return (
    <>
      <Header/>
      <Menu/>
      <Slider/>
      <Cloths/>
      <MensCloths/>
      <Jewelery/>
      <Electronic/>
    
      
      {/* <Login/> */}
      {/* <SignUp/> */}
      <Footer/>
    </>
  )
}

