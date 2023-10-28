import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'

const Recoment = () => {
  return (
    <div className='pt-9 px-11'>
      <div className='text-xl' >
        Fresh Recommendations
      </div>

      <div className=' h-96 m-9  px-8 py-5'>
            <div className='bg-white w-72 relative  ' >
            <div className='px-7'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqghGCKVv8VpBkFnIY0DS6zXrnsTuxE0xhiA&usqp=CAU">

            </img>
        </div>
        <div className='px-5 py-2 '>
            <p className='font-bold'>$109.95</p>
            <p className='text-sm'>fjallraven-foldsack No.1 Backpack,</p>
            <p className='text-xs text-gray-400'>your perfect pack for everyday</p>  
        </div>

        <div className='bg-slate-50 rounded-full absolute top-2 right-2 w-7 h-6 flex items-center justify-center'>
             <AiOutlineHeart/>
          </div>
            </div>

            <div className='  flex items-center justify-center'>
                <button className='bg-white border-4 border-slate-800 font-semibold h-10 px-5 py-1'>Load More</button>
            </div>
        
      </div>
      
    </div>
  )
}

export default Recoment
