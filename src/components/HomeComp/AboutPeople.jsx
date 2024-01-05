import React from 'react'

function AboutPeople() {
  return (
    <div className='w-[100%] lg:px-32 px-5 bg-[#f2f2f3] h-auto xl:h-[750px] py-10'>
        <div className='relative flex md:flex-row flex-col w-[100%] h-[100%] bg-[#f8f2ff] shadow-md rounded-xl py-5'>
            <div className='w-[100%] md:px-16 px-8 py-10'>
                <h2 className='md:text-[66px] text-[36px] text-[#9300ff] font-bold leading-tight mb-3'>It’s about people.</h2>
                <p className='md:text-[20px] text-[15px] mb-10'>Designers, developers, engineers, artists. All driven by passion. All using Blender to make an impact.</p>
                <div className='md:h-[380px] h-auto flex md:flex-row flex-col justify-evenly'>
                  <div className='md:w-[22%] w-[100%] h-[100%]'>
                    <img className='md:h-[80%] h-[300px] w-[100%] object-cover rounded-xl transform hover:scale-105 transition-transform duration-300' src="https://www.blender.org/wp-content/uploads/2021/10/blender_today_pablo.jpg" alt="" />
                    <p className='md:text-[20px] text-[16px] mb-10 py-2'>Connecting Blender Community</p>
                  </div>

                  <div className='md:w-[22%] w-[100%] h-[100%]'>
                    <img className='md:h-[80%] h-[300px] w-[100%] object-cover rounded-xl transform hover:scale-105 transition-transform duration-300' src="https://www.blender.org/wp-content/uploads/2021/10/daniel_martinez_lara_annecy.jpg" alt="" />
                    <p className='md:text-[20px] text-[16px] mb-10 py-2'>Showcasing Blender at industry events</p>
                  </div>

                  <div className='md:w-[22%] w-[100%] h-[100%]'>
                    <img className='md:h-[80%] h-[300px] w-[100%] object-cover rounded-xl transform hover:scale-105 transition-transform duration-300' src="https://www.blender.org/wp-content/uploads/2021/10/creating_worlds_ian_hubert.jpg" alt="" />
                    <p className='md:text-[20px] text-[16px] mb-10 py-2'>Creating Worlds at BCON19</p>
                  </div>

                  <div className='md:w-[22%] w-[100%] h-[100%]'>
                    <img className='md:h-[80%] h-[300px] w-[100%] object-cover rounded-xl transform hover:scale-105 transition-transform duration-300' src="https://www.blender.org/wp-content/uploads/2021/10/nodevember.jpg" alt="" />
                    <p className='md:text-[20px] text-[17px] mb-10 py-2'>The demo scene is back with Nodevember</p>
                  </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPeople