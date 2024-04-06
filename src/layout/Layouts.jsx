import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import "../scss/global.scss"
import Components from '../pages/Components'
import Home from '../pages/Home'
import Navigation from '../components/navigation/Navigation'

function Layouts() {

  const[activeLink, setActiveLink] = useState(null)

  return (
    <>
        <Navigation activeLink={activeLink} setActiveLink={setActiveLink}/>
     <Routes >
      <Route path='/components' element={<Components />}/>
      <Route path='/' element={<Home />}/>
     </Routes>
    </>
  )
}

export default Layouts