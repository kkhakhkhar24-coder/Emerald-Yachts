import React from 'react'
import EmeraldYachts from '../src/pages/EmeraldYachts/EmeraldYachts'
import DrakePassagePage from '../src/pages/DrakePassagePage/DrakePassagePage'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmeraldYachts />}></Route>
          <Route path='/DrakePassagePage' element={<DrakePassagePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App