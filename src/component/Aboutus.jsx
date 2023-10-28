import React from 'react'
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'

const Aboutus = () => {
  return (
    <div className='flex flex-row items-center bg-gray-200 h-48 w-full justify-center gap-20'>
      <div>
        <p className='font-bold text-[13px] '> POPULAR LOCATIONS</p>
        <div className='text-[12px] text-slate-500 pt-2 '>
        <p>Kolkata</p>
        <p>Mumbai</p>
        <p>Chennai</p>
        <p>Pune</p>
        </div>
        
      </div>

      <div>
        <p className='font-bold text-[13px] '>TRENDING LOCATION</p>
        <div className='text-[12px] text-slate-500 pt-2 pb-4 '>
        <p>Bhubaneshwar</p>
        <p>Hyderabad</p>
        <p>Chandigarh</p>
        <p>Nashik</p>
        </div>
        
      </div>

      <div>
        <p className='font-bold text-[13px] '>ABOUT US</p>
        <div className='text-[12px] text-slate-500 pt-2 ' >
        <p>About OLX Group</p>
        <p>Careers</p>
        <p>Contact Us</p>
        <p>OLXPeople</p>
        <p>Waah Jobs</p>
        </div>
        
      </div>

      <div>
        <p className='font-bold text-[13px] '> OLX</p>
        <div className='text-[12px] text-slate-500 pt-2 '>
        <p>Help</p>
        <p>Sitemap</p>
        <p>Legal & Privacy Information</p>
        <p>Blog</p>
        <p>OLX Autos Sell Car</p>
        <p>Vulnerability Disclosure Program</p>
        </div>
        
      </div>

      <div>
        <p className='font-bold text-[13px] '>FOLLOW US</p>
        <div className='flex gap-1 pt-2'>
            < BiLogoFacebook/>
            < AiOutlineInstagram/>
            < FiTwitter/>
        </div>

        <div className='flex pt-12 gap-3 w-20'>
                <img src="https://statics.olx.in/external/base/img/appstore_2x.webp
                                "></img>
                                <img src="https://statics.olx.in/external/base/img/playstore_2x.webp
                                "></img>
            </div>
        
      </div>

    </div>
  )
}

export default Aboutus
