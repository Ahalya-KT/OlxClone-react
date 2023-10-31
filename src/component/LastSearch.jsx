import React, { useState } from 'react'
import {BsLightningChargeFill} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import axios from 'axios'

const Cards = () => {


  const[items,setitems]=useState([])


 async function Carddetails(){

 await axios.get('https://fakestoreapi.com/products')
  // .then(res=>res.json()) 
   .then(res=>setitems(res.data))


 }
 Carddetails()

  return (
    <div>

      {items && items.map(li=>{
        console.log(li);
        return <div className='w-52 '>
          <img  src={li.image}></img>
          <p>{li.id}</p>
          <p>{li.title}</p>
          <p>{li.price}</p>
        </div>
      })}
       
      
    </div>
  )
}

export default Cards
