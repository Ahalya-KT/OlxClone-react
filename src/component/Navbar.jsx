import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div>
      <nav className='flex px-10 py-2 bg-gray-100 items-center border-b-4 border-white shadow fixed z-20 w-full '>
        <div>
          <img src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png" className='w-11'></img>
        </div>
            {/* location */}
          <div className='gap-2 flex px-2 py-2  mx-3 w-full'>
            <div className='border-2  border-black '>
          <div className='text-sm bg-white w-40 h-6 font-light px-2'>
            India
            </div>
           </div>

          {/* finds */}
        <div className=' border-black w-full '>
          <div className='text-sm bg-white w-full h-6 font-light px-2 '>
            Find Cars,Mobile Phones and more...
            </div>
           {/* <div>

             <AiOutlineSearch className='bg-black text-white w-8 h-7'/>border-2 

           </div> */}
        </div>

        <div>
          <select>
            <option>ENGLISH</option>
            <option>HINDI</option>
          </select>
        </div>

        <div>
          <button>Login</button>
        </div>
        <div className='bg-white w-14 rounded-lg px-3'>
          <button>
            SELL
          </button>
        </div>
          </div>
        
      </nav>
     
    </div>
  )
}

export default Navbar
