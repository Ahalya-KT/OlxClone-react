
import './App.css'
import Aboutus from './component/Aboutus'
import Cards from './component/Cards'
import Catgory from './component/Catgory'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Recoment from './component/Recoment.Jsx'
import Review from './component/Review.jsx'

function App() {
  

  return (
    <>
     <div>
     <Navbar/>
     </div>

     <div>
      <Catgory/>
     </div>

     <div>
      <Cards/>
     </div>

     <div>
      <Recoment/>
     </div>

      
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
