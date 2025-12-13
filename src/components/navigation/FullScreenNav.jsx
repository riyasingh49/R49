import React from 'react'
import explore1 from '../../assets/explore1.avif'
import explore2 from '../../assets/explore2.avif'

const FullScreenNav = () => {
  return (
    <div id='fullscreennav' className='h-screen w-full text-white absolute py-40 bg-amber-50'>
        <div className=' '>
            <div className='link border-y border-white'>
                <h1 className='font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase'>Explore</h1>
                {/* <div>
                <div>
                    <h2>Wander Where Nature Whispers</h2>
                    <img src={explore1}></img>
                    <h2>Wander Where Nature Whispers</h2>
                    <img src={explore2}></img>

                </div>
                <div>
                    <h2>Wander Where Nature Whispers</h2>
                    <img src={explore1}></img>
                    <h2>Wander Where Nature Whispers</h2>
                    <img src={explore2}></img>

                </div>
                </div> */}
                
            </div>
        </div>
      
    </div>
  )
}

export default FullScreenNav
