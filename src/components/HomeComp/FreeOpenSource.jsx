import React from 'react'

function FreeOpenSource() {
  return (
    <div className='w-[100%] lg:px-32 px-5 bg-[#f2f2f3] h-auto xl:h-[400px] py-5'>
        <div className='relative flex md:flex-row flex-col w-[100%] h-[100%] bg-[#1c1c1c] rounded-xl py-5'>
            <div className='md:w-[70%] w-[100%] md:px-16 px-8 py-10'>
                <h2 className='md:text-[66px] text-[36px] text-[#46ebc2] font-bold leading-tight mb-3'>Free and Open Source</h2>
                <p className='md:text-[20px] text-[15px] text-white mb-10'>Blender is a public project hosted on blender.org, licensed as GNU GPL, owned by its <br /> contributors.</p>
                <p className='md:text-[20px] text-[15px]  text-white'>For that reason Blender is Free and Open Source software, forever. Learn more</p>
            </div>
            <div className='md:w-[30%] w-[80%] flex md:justify-end justify-center py-10 md:pe-10 pe-0'>
                <img className='md:h-[70%] h-[250px]' src="https://www.blender.org/wp-content/uploads/2021/08/blender_fund_hex-e1629996297522.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default FreeOpenSource