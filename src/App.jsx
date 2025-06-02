import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Allroutes from './Router/Allroutes'
import Navbar from './Component/Navbar'
import { CartProvider } from './Component/CartContext'

function App() {

  return (
    <>
      <CartProvider>
        <Navbar />
        <Allroutes />
      </CartProvider>
    </>
  )
}

export default App
