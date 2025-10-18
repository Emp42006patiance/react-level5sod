import React from 'react'
import Rendering from './pages/Rendering'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ReducerApplication from './pages/ReducerApplication'

export default function App() {
  return (
    <>
      <div>
        <Link to="/register/Login">LOGIN</Link>
        <br />
        <Link to="/register/ReducerApplication">ReducerApplication</Link>
      </div>
      <div>
      <Routes>
        <Route path="/register" element={<Rendering />}>
          <Route path="Login" element={<Login />} />
          <Route path="ReducerApplication" element={<ReducerApplication/>}/>
        </Route>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </div>
    </>
  )
}
