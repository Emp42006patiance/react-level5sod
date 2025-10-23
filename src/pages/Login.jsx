import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login() {
const [Names, yourNames] = useState("")
const [password, yourPassword] = useState("")

let navitation_Of_Pages=useNavigate()
const data_be_setted = {Names,password} 
function Handling_requests(){
  const inserted_Data= localStorage.setItem("my_evaluation_data",JSON.stringify(data_be_setted));
   if(!inserted_Data){
     navitation_Of_Pages("/dashboard")

}
else{
console.log("failed to insert user in localstorage but already stored oin usestate ")
}
}
  return (
    <div>
      <form method='post' > 
      <h1>THIS MY LOGIN PAGE FROM PAGE FORDER </h1>
      <fieldset>
      NAMES:<input type='text' value={Names} onChange={(e)=>yourNames(e.target.value)} placeholder='john doe'/>
      <br />
      <br />
      PASSWORD:<input type='password' value={password} onChange={(e)=>yourPassword(e.target.value)} placeholder='A@p~K2&/?[hack-_-on]'/>
      <br /> 
      <br />
      <button onClick={Handling_requests}>LOGIN</button>
      </fieldset>
      </form>
    </div>
  )
}
