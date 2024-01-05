import React from 'react'

function PartOfTheIndustry() {
  return (
    <div className='w-[100%] lg:px-32 px-5 bg-[#f2f2f3] h-auto xl:h-[550px] py-10'>
        <div className='flex md:flex-row flex-col w-[100%] h-[100%] bg-[#f2f7ff] shadow-md rounded-xl py-5'>
            <div className='w-[100%] md:px-16 px-8 py-10'>
                <h2 className='md:text-[66px] text-[36px] text-[#0066ff] font-bold leading-tight mb-3'>Part of the Industry</h2>
                <p className='md:text-[20px] text-[15px] mb-10'>Blender is a member of ASWF, Khronos, Linux Foundation and OIN. It’s also well supported by major hardware <br /> vendors such as AMD, Apple, Intel, and NVIDIA. <br /> contributors.</p>
                <div className='flex sm:flex-row flex-wrap sm:h-[150px] h-auto'>
                    <div className='sm:w-[24%] w-[50%] md:p-10 p-8'>
                        <img className='h-[100%] object-contain' src="https://www.blender.org/wp-content/uploads/2021/10/khronos.png" alt="" />
                    </div>
                    <div className='sm:w-[24%] w-[50%] md:p-10 p-8'>
                        <img className='h-[100%] object-contain' src="https://www.blender.org/wp-content/uploads/2021/10/linux_foundation.png" alt="" />
                    </div>
                    <div className='sm:w-[24%] w-[50%] md:p-10 p-8'>
                        <img className='h-[100%] object-contain' src="https://www.blender.org/wp-content/uploads/2021/10/open_invention_network.png" alt="" />
                    </div>
                    <div className='sm:w-[24%] w-[50%] md:p-10 p-8'>
                        <img className='h-[100%] object-contain' src="https://www.blender.org/wp-content/uploads/2021/10/academy_software_foundation.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PartOfTheIndustry