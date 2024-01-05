import React from 'react'

function LatestNews() {
  return (
    <div>
      <div className='lg:h-[600px] h-auto w-[100%] lg:px-32 px-5 lg:py-20 py-12 bg-[#f2f2f3]'>
        <h4 className='lg:text-[30px] text-[23px] font-bold text-[#4c4d52] mb-5'>Latest News</h4>

        <div className='flex sm:flex-row flex-col lg:h-[400px] h-auto'>
          <div className='h-[100%] sm:w-[50%] w-[100%] mb-5 p-3'>
            <img className='lg:h-[80%] h-[50%] w-[100%] object-fill rounded-xl' src="https://www.blender.org/wp-content/uploads/2023/12/blender_30th_birthday_2_1.jpg" alt="" />
            <p className='font-bold text-[#4c4d52] my-3 lg:text-[14px] text-[12px]'>NEWS</p>
            <p className='font-seibold text-[#4c4d52] mt-3 lg:text-[22px] text-[16px]'>Donation Drive</p>
          </div>
          <div className='h-[100%] sm:w-[50%] w-[100%] p-3'>
            <img className='lg:h-[80%] h-[50%] w-[100%] object-fill  rounded-xl' src="https://www.blender.org/wp-content/uploads/2023/11/blenderheads_ep04_thumbnailv1.jpg" alt="" />
            <p className='font-bold text-[#4c4d52] my-3 lg:text-[14px] text-[12px]'>DOCUMENTARY</p>
            <p className='font-seibold text-[#4c4d52] mt-3 lg:text-[22px] text-[16px]'>BLENDERHEADS ep. 04</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LatestNews