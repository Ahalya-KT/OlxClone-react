import React from 'react'

const Cards = () => {
  return (
    <div>
        {/* cards */}
      <div className=' bg-gray-100 h-96 m-9 rounded-md px-8 py-5'>
        
        <div className='pb-4 text-1xl'>

            Based on Your Last Search

        </div>
        
            <div className='bg-white w-72  relative' >
            <div className='px-7'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqghGCKVv8VpBkFnIY0DS6zXrnsTuxE0xhiA&usqp=CAU">

            </img>
        </div>
        <div className='px-5 py-2  border-l-4 border-yellow-500'>
            <p className='font-bold'>$109.95</p>
            <p className='text-sm'>fjallraven-foldsack No.1 Backpack,</p>
            <p className='text-xs text-gray-400'>your perfect pack for everyday</p>  
        </div>

        <div className='bg-amber-300 w-24  absolute top-2 left-2 flex justify-center items-center'>
            <div>
            <BsLightningChargeFill/>
            </div>
        
            <p>Featured</p>

           
           
        </div>
        <div className='bg-slate-50 rounded-full absolute top-2 right-2 w-7 h-6 flex items-center justify-center'>
             <AiOutlineHeart/>
          </div>
            </div>
        
      </div>
    </div>
  )
}

export default Cards
