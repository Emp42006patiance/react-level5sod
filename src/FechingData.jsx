import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

export default function FechingData() {
    const [products_Info , setProduct] =useState([])
    const [isloading,setLoading] = useState()
    const getDataOnline = async ()=>{
        setLoading(true)
        const retrieved_data =  await axios.get("https://dummyjson.com/products")
            setProduct(retrieved_data.data.products)
            console.log(retrieved_data.data.products)
            setLoading(false)
    }
    useEffect(()=>{
        getDataOnline()
         
    },[])
    if(isloading){
        return"this loading message  ..."
    }
  return (
    <>    <div>
        <div >
            
           {
            products_Info.map((prod) =>(
                
              <div>
                <img src={prod.thumbnail}  />
                 <h1><p>{prod.title}</p> </h1>
                 <p>{prod.warrantyInformation}</p>
              </div>
              
              
                ))}            
        </div>
    </div>
  </>
)
}
