import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "../scss/global.scss"
import Home from '../pages/Home'

function Layouts() {
  return (
    <>
     <Routes >
      <Route path='/' element={<Home />}/>
     </Routes>
    </>
  )
}

export default Layouts