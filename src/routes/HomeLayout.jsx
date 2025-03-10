import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../pages/footer/Footer'
import Header from '../pages/header/header'

const HomeLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
      
    </div>
  )
}

export default HomeLayout
