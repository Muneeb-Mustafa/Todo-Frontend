import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Home from './Home'
import AddTodo from './AddTodo'

const Frontend = () => {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addTodo" element={<AddTodo />} />
        <Route path="*" element={<div>404 Page not Found</div>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default Frontend
