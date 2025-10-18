import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const [Names, yourNames] = useState(" ")
  const navigate= useNavigate()

  useEffect(() => {
    const stored = localStorage.getItem("my_evaluation_data")
      const parsed = JSON.parse(stored)
         yourNames(parsed.Names) 
  })
function logOut(){
    localStorage.removeItem("my_evaluation_data")
   navigate("/login")
}
  return (
    <div>
      <h1>
        <u>
          THIS IS YOUR DASHBOARD — WELCOME
          <span> {Names}</span>
        </u>
      </h1>
      <button onClick={logOut}>LOG OUT</button>
    </div>
  )
}
