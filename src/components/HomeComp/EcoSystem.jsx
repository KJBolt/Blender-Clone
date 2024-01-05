import React from 'react'

function EcoSystem() {
  return (
    <div className='w-[100%] lg:px-32 px-5 bg-[#f2f2f3] h-auto xl:h-[550px] py-10 relative rounded-xl'>
        <div className='relative flex md:flex-row flex-col w-[100%] md:h-[500px] h-[550px] bg-[#f2f7ff] shadow-md rounded-xl overflow-hidden '>
            <img className='absolute w-[100%] h-[100%] rounded-xl object-cover' src="https://www.blender.org/wp-content/uploads/2020/11/bcon20_todos-1536x703.jpg" alt="" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-blue-800"></div>

            <div className='absolute z-10 mx-10 py-20'>
                <h2 className='sm:text-[60px] mb-5 text-[36px] font-bold text-white leading-tight'>The EcoSystem</h2>
                <p className='sm:text-[20px] text-[15px] mb-10 font-semibold text-white text-justify'>Countless communities and thriving businesses are built around Blender.</p>
                <p className='sm:text-[20px] text-[15px] mb-10 font-semibold text-white text-justify'>Together, these tutorial makers and content creators, add-on developers <br />and global marketplaces form an ever-expanding ecosystem.</p>
                <p className='sm:text-[20px] text-[15px] mb-10 font-semibold text-white underline'>Find Blender Communities</p>
            </div>
        </div>
    </div>
  )
}

export default EcoSystem