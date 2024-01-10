import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import { Landing } from './component/Landing';
import { Room } from './component/Room';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/room' element={<Room />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
