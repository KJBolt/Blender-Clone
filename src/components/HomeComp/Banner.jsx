import React from 'react'

function Banner() {
  return (
    <div>
        <div className='lg:h-[590px] h-[500px] relative'>
            <img src="https://www.blender.org/wp-content/uploads/2023/10/blender_splash_gaku_2K.jpg" alt="" className='h-[100%] w-[100%] absolute object-cover'/>
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-blue-800"></div>

            <div className='absolute bottom-0  mb-8 ms-0 lg:ms-24 p-10'>
                <h1 className='lg:text-[63px] md:text-[50px] text-[40px] font-bold text-white'>Blender 4.0</h1>
                <p className='pb-5 text-[18px] lg:text-[22px] font-semibold text-white'>Introducing Cycles Light Linking, new Principled BSDF shader,<br /> better Color Management, and so much more!</p>
                <div className='flex'>
                    <div className='me-2 px-5 mb-2 py-1 w-auto border rounded bg-[#eceff6] font-semibold'>
                        <p>Download</p>
                    </div>
                    <div className='me-2 px-5 py-1 rounded w-auto bg-[#2d5292] font-semibold text-white'>
                        <p>Whats New</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner