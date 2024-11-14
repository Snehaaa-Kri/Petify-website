import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import {Route, Routes} from 'react-router-dom'
import AddProduct from '../../components/AddProduct/AddProduct'
import ListProduct from '../../components/ListProduct/ListProduct'

function Admin() {
  return (
    <div className='flex flex-col md:flex-row '>
        {/* sidebar */}
        <Sidebar />
        <Routes>
            <Route path='/addproduct' element={<AddProduct/>} />
            <Route path='/listproduct' element={<ListProduct/>} />
        </Routes>
    </div>
  )
}

export default Admin