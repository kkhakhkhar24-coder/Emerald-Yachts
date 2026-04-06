import React from 'react'
import EmeraldYachts from '../src/pages/EmeraldYachts/EmeraldYachts'
import DrakePassagePage from '../src/pages/DrakePassagePage/DrakePassagePage'
import ScenicVSSilversea from '../src/pages/ScenicVSSilversea/ScenicVSSilversea'
import AntarcticaCruise from '../src/pages/AntarcticaCruise/AntarcticaCruise'
import ScenicAntarctica from '../src/pages/ScenicAntarctica/ScenicAntarctica'
import ScenicvsEmeraldYachts from '../src/pages/ScenicvsEmeraldYachts/ScenicvsEmeraldYachts'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import LuxuryTravel from './pages/LuxuryTravel/LuxuryTravel'
import ScenicVSFourSeasonsYachts from './pages/ScenicVSFourSeasonsYachts/ScenicVSFourSeasonsYachts'
import EmeraldAzzurraVsEmeraldSakara from './pages/EmeraldAzzurraVsEmeraldSakara/EmeraldAzzurraVsEmeraldSakara'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmeraldYachts />}></Route>
          <Route path='/DrakePassagePage' element={<DrakePassagePage />}></Route>
          <Route path='/scenic-vs-silversea-antarctica' element={<ScenicVSSilversea />}></Route>
          <Route path='/antarctica-cruise-cost' element={<AntarcticaCruise />}></Route>
          <Route path='/scenic-antarctica-cruise' element={<ScenicAntarctica />}></Route>
          <Route path='/luxury-travel' element={<LuxuryTravel />}></Route>
          <Route path='/ScenicvsEmeraldYachts' element={<ScenicvsEmeraldYachts />}></Route>
          <Route path='/scenic-vs-four-seasons-yachts' element={<ScenicVSFourSeasonsYachts />}></Route>
          <Route path='/emerald-azzurra-vs-emerald-sakara' element={<EmeraldAzzurraVsEmeraldSakara />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App