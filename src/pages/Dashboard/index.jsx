import React from 'react'
import { Route, Routes } from 'react-router-dom' 
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Home from './Home'

const Dashboard = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="*" element={<div>404 Page not Found</div>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default Dashboard
