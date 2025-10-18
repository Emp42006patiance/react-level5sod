import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Rendering() {
  return (
    <div>
         <h1><i><u>THIS RENDERING OF PAGE TESTING </u></i></h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi laboriosam nobis, soluta libero molestiae ipsam voluptas excepturi tenetur voluptatibus iusto, ex distinctio quam officiis exercitationem! Iste, id. Molestias, ullam quisquam.</p>
    <Outlet/>
    </div>

  )

}
