import React from 'react'
import EmeraldYachts from '../src/pages/EmeraldYachts/EmeraldYachts'
import DrakePassagePage from '../src/pages/DrakePassagePage/DrakePassagePage'
import ScenicVSSilversea from '../src/pages/ScenicVSSilversea/ScenicVSSilversea'
import ScenicAntarctica from '../src/pages/ScenicAntarctica/ScenicAntarctica'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmeraldYachts />}></Route>
          <Route path='/DrakePassagePage' element={<DrakePassagePage />}></Route>
          <Route path='/ScenicVSSilversea' element={<ScenicVSSilversea />}></Route>
          <Route path='/ScenicAntarctica' element={<ScenicAntarctica />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App