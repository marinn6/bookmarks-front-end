import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Show from './components/Show'
import New from './components/New'
import Edit from './components/Edit'
import { Routes, Route, Navigate } from 'react-router-dom'


function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/bookmarks" replace />} />
        <Route path="/bookmarks" element={<Home />} />
        <Route path="/bookmarks/new" element={<New />} />
        <Route path='/bookmarks/:index' element={<Show />}/>
        <Route path="/bookmarks/:index/edit" element={<Edit />}/>
      </Routes>
    </div>
  )
}

export default App
