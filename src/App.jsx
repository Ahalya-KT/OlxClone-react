
import { useState } from 'react'
import './App.css'
import Aboutus from './component/Aboutus'
import Catgory from './component/Catgory'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Recoment from './component/Recoment.Jsx'
import Review from './component/Review.jsx'
import Home from './component/Home'


function App() {
  
  const[items,setitems]=useState([])

  return (
    <>
     <div>
     <Navbar/>
     </div>

     <div>
      <Catgory/>
     </div>


      <Home/>

        {/* <div>
          <LastSearch/>
        </div>

     <div>
      <Cards/>
     </div>

     <div>
      <Recoment/>
     </div> */}

      
      <div>
        <Review/>
      </div>

      <div>
        <Aboutus/>
      </div>

      <div>
     <Footer/>
      </div>

    
    </>
  )
}

export default App
