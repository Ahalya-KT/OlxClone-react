import axios from 'axios'
import React, { useState } from 'react'
import Recoment from './Recoment.Jsx'

const FreshRecomment = () => {

    const[dataItem,setdataItem]=useState()

 async function details(){
 await   axios.get("https://fakestoreapi.com/products/")
    .then((res)=>setdataItem(res.data))
  }
  details()


  
  return (
    <div>
      <div className='text-xl' >
        Fresh Recommendations
      </div>

      <div>
       {
        dataItem && dataItem.map(li=> {
            console.log(li)
            return  <Recoment item={item}/>
           
        })
       
       }
      </div>
    </div>
  )
}

export default FreshRecomment
