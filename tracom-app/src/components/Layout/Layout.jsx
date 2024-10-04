import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
// import LandingPage from '../Landingpage'
function Layout() {
  return (
    <>
    <Header/>
    {/* <LandingPage/> */}
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout