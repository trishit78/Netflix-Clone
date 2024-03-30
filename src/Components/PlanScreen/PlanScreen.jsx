import React from 'react'

import './PlanScreen.css' 

function PlanScreen() {
  return (
    <>
        <div className='plan'>
            <div className='info'>
                <h2 className='text-lg'>Premium</h2>
                <h6 className='text-sm'>4K * HDR</h6>

            </div>
            <button className=' text-white font-semibold px-4 rounded'>Subscribe</button>

        </div>
        <div className='plan'>
            <div className='info'>
                <h2 className='text-lg'>Basic</h2>
                <h6 className='text-sm'>720p</h6>

            </div>
            <button className=' text-white font-semibold px-4 rounded'>Subscribe</button>

        </div>
        <div className='plan'>
            <div className='info'>
                <h2 className='text-lg'>Standard</h2>
                <h6 className='text-sm'>1080p</h6>

            </div>
            <button className=' text-white font-semibold px-4 rounded'>Subscribe</button>

        </div>
    </>
  )
}

export default PlanScreen
