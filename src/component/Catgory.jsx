import React from 'react'

const Catgory = () => {
  return (
    <div className=' pt-20 flex px-4 py-3 gap-5 border-b-4 border-white shadow items-center'>
      <div className='font-bold'>
        ALL CATEGORIES
      </div>

      <div className='flex gap-3 text-sm' >
        <div>
            Cars
        </div>
        <div>
           Motorcycles
        </div>
        <div>
          Mobile Phone
        </div>
        <div>
           For Sale:House&Apartments
        </div>
        <div>
           Scooters
        </div>
        <div>
           Commerical&Other Vehicles
        </div>
        <div>
          For Rent:House&Apartments
        </div>
      </div>
    </div>
  )
}

export default Catgory
