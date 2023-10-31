import React from 'react'

const Review = () => {
  return (
    <div className='pt-10'>
      <div className='flex flex-row gap-6 bg-zinc-100 w-full h-48 '>

        <div>
            <img src="https://statics.olx.in/external/base/img/phone-app.webp"></img>
        </div>

        <div>
            <p className='pt-7 font-bold text-2xl'>TRY THE OLX APP</p>
            <p className='pt-7 break-words w-80'>Buy, sell and find just about anything using
           the app on your mobile.</p>
        </div>

        <div className='pt-8 px-10'>
            <p className='font-bold text-lg'>GET YOUR APP TODAY</p>

            <div className='flex pt-6 gap-3 w-20'>
                <img src="https://statics.olx.in/external/base/img/appstore_2x.webp
                                "></img>
                                <img src="https://statics.olx.in/external/base/img/playstore_2x.webp
                                "></img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Review
