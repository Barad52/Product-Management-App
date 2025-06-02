import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Component/Home'
import Product from '../Component/Product'
import Addproduct from '../Component/Addproduct'
import Addcart from '../Component/Addcart'

const Allroutes = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/addproduct' element={<Addproduct />}></Route>
        <Route path='/addcart' element={<Addcart />}></Route>
      </Routes>

    </div>
  )
}
export default Allroutes