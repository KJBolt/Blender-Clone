import React from 'react'

function BlenderStudio() {
  return (
    <div className='w-[100%] lg:px-32 px-5  bg-[#f2f2f3]'>
        <h4 className='lg:text-[30px] text-[23px] font-bold text-[#4c4d52] mb-5'>Blender Studio</h4>

        <div className='md:h-[400px] h-auto flex md:flex-row flex-col'>
            <div className='md:w-[25%] w-[100%] me-2 h-[100%] mb-5 p-2'>
                <div className='h-[50%]'>
                    <img className='rounded-xl w-[100%] transform hover:scale-105 transition-transform duration-300' src="https://ddz4ak4pa3d19.cloudfront.net/cache/64/ff/64ff808f240def4df9d6847f056ac9a4.jpg" alt="" />
                    <p className='md:font-medium font-bold text-[#4c4d52] mt-3 lg:text-[22px] text-[16px]'>Donation Drive</p>
                    <p className='font-seibold text-[#4c4d52] mt-1 lg:text-[18px] text-[16px]'>bbatch is a command line tool used to find .blend files and execute a provided python script.</p>
                </div>
                
            </div>
            <div className='md:w-[25%] w-[100%] md:me-2 me-0 border-blue-700 h-[100%] mb-5 p-2'>
                <img className='rounded-xl w-[100%] transform hover:scale-105 transition-transform duration-300' src="https://ddz4ak4pa3d19.cloudfront.net/cache/ca/1e/ca1ec00b1c9c4da9cfa0ac0d7da14e17.jpg" alt="" />
                <p className='font-medium text-[#4c4d52] mt-3 lg:text-[22px] text-[16px] leading-tight '>Cartoon Character Shading with Geometry Nodes</p>
                <p className=' text-[#4c4d52] mt-1 lg:text-[18px] text-[16px]'>A close look at how the cartoony character shading was done for Wing It! using the power of Geometry Nodes.</p>
            </div>
            <div className='md:w-[25%] w-[100%] me-2 h-[100%] mb-5 p-2'>
                <img className='rounded-xl w-[100%] transform hover:scale-105 transition-transform duration-300' src="https://ddz4ak4pa3d19.cloudfront.net/cache/8c/e6/8ce64e5ede1f12d7826751bd93278a1d.jpg" alt="" />
                <p className='font-medium text-[#4c4d52] mt-3 lg:text-[22px] text-[16px] leading-tight'>Production Recap: Story Development for Gold</p>
                <p className='text-[#4c4d52] mt-1 lg:text-[18px] text-[16px]'>Gold has been in the works for a few months now - here is an attempt to summarize the first main steps and milestones, starting with the story.</p>
            </div>
            <div className='md:w-[25%] w-[100%] me-2 h-[100%] mb-5 p-2'>
                <img className='rounded-xl w-[100%] transform hover:scale-105 transition-transform duration-300' src="https://ddz4ak4pa3d19.cloudfront.net/cache/6a/46/6a4658537f319d7483b921f814ff4a70.jpg" alt="" />
                <p className='font-medium text-[#4c4d52] mt-3 lg:text-[22px] text-[16px]'>Node Tools in Blender 4.0</p>
                <p className='text-[#4c4d52] mt-1 lg:text-[18px] text-[16px]'>Blender 4.0 released with the new node tools feature. Here are a few simple setups to try.</p>
            </div>

        </div>
    </div>
  )
}

export default BlenderStudio