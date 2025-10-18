import React from 'react'
import Rendering from './pages/Rendering'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <>
      <div>
        <Link to="/register/Login">LOGIN</Link>
      </div>

      <Routes>
        <Route path="/register" element={<Rendering />}>
          <Route path="Login" element={<Login />} />
        </Route>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}
