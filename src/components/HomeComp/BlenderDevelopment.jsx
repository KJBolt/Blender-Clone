import React from 'react'

function BlenderDevelopment() {
  return (
    <div className='w-[100%] lg:px-32 px-5 bg-[#f2f2f3]'>
        <h4 className='lg:text-[30px] text-[23px] font-bold text-[#4c4d52] mb-5'>Blender Development</h4>

        <div className='md:h-[400px] h-auto flex md:flex-row flex-col'>
            <div className='md:w-[25%] w-[100%] me-2 h-[100%] mb-5 p-2'>
                <div className='h-[50%]'>
                    <img className='rounded-xl w-[100%] transform hover:scale-105 transition-transform duration-300' src="https://code.blender.org/wp-content/uploads/2023/12/developer-documentation-featured-480x270.png" alt="" />
                    <p className='font-medium text-[#4c4d52] mt-3 lg:text-[22px] text-[16px]'>A New Developer Documentation Platform</p>
                    <p className=' text-[#4c4d52] mt-1 lg:text-[18px] text-[16px]'>A new platform to foster a shift in developer documentation culture.</p>
                </div>
                
            </div>
            <div className='md:w-[25%] w-[100%] md:me-2 me-0 border-blue-700 h-[100%] mb-5 p-2'>
                <img className='rounded-xl w-[100%] transform hover:scale-105 transition-transform duration-300' src="https://code.blender.org/wp-content/uploads/2023/10/grease-pencil-banner-480x270.jpg" alt="" />
                <p className='font-medium text-[#4c4d52] mt-3 lg:text-[22px] text-[16px] leading-tight'>Grease Pencil: Task Force</p>
                <p className=' text-[#4c4d52] mt-1 lg:text-[18px] text-[16px]'>This is a call to the Blender community to help out and get Grease Pencil 3 out of experimental!</p>
            </div>
            <div className='md:w-[25%] w-[100%] me-2 h-[100%] mb-5 p-2'>
                <img className='rounded-xl w-[100%] transform hover:scale-105 transition-transform duration-300' src="https://code.blender.org/wp-content/uploads/2023/11/code_blog__thumbnail_geometry_nodes_workshop_nov_2023-480x270.jpg" alt="" />
                <p className='font-medium text-[#4c4d52] mt-3 lg:text-[22px] text-[16px] leading-tight'>Geometry Nodes Workshop: November 2023</p>
                <p className=' text-[#4c4d52] mt-1 lg:text-[18px] text-[16px]'>Exploring many design topics for the future of geometry nodes.</p>
            </div>
            <div className='md:w-[25%] w-[100%] me-2 h-[100%] mb-5 p-2'>
                <img className='rounded-xl w-[100%] transform hover:scale-105 transition-transform duration-300' src="https://code.blender.org/wp-content/uploads/2023/10/vulkan_project_update-480x270.jpg" alt="" />
                <p className='font-medium text-[#4c4d52] mt-3 lg:text-[22px] text-[16px]'>Vulkan Project Update</p>
                <p className='text-[#4c4d52] mt-1 lg:text-[18px] text-[16px]'>Last week a big milestone was reached: the Vulkan backend has been enabled as an experimental option.</p>
            </div>

        </div>
    </div>
  )
}

export default BlenderDevelopment