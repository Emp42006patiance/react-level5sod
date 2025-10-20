import React from 'react'
import Rendering from './pages/Rendering'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ReducerApplication from './pages/ReducerApplication'
import Backend_Configuration from './pages/Backend_Configuration'

export default function App() {
  return (
    <>
      <div>
        <Link to="/register/Login">LOGIN</Link>
        <br />
        <Link to="/register/ReducerApplication">ReducerApplication</Link>
        <br />
        <Link to="/register/Backend_Configuration">unit testing backend  </Link>
      </div>
      <div>
      <Routes>
        <Route path="/register" element={<Rendering />}>
          <Route path="Login" element={<Login />} />
          <Route path="ReducerApplication" element={<ReducerApplication/>}/>
          <Route path='Backend_configuration' element={<Backend_Configuration/>}/>
        </Route>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </div>
    </>
  )
}
