import React from 'react'
import Header from '../components/Header'
import Routers from '../routes/Routers'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'


const Layout = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");
  return (
   <>
   
   {!isAdminPage && <Header />}
   <main>
    <Routers/>
   </main>
    {!isAdminPage && <Footer />}
   
   
   </>
  )
}

export default Layout