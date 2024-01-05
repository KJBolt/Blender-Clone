import React from 'react';
import { CiYoutube } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { TbBrandMastodon } from "react-icons/tb";

function Footer() {
  return (
    <div>
        <div className='w-[100%] bg-[#292d32] h-auto pt-10 flex justify-center'>
            <div className='lg:h-[450px] h-auto lg:w-[80%] w-[100%] flex sm:flex-row flex-wrap  justify-start'>
                <div className='lg:w-[18%] sm:w-[30%] w-[50%] lg:h-[100%] md:h-[50%] h-auto p-5'>
                    <p className='text-[#a4b0b9] font-medium'>Download</p>
                    <p className='text-[#667487]'>Latest Blender</p>
                    <p className='text-[#667487]'>Blender LTS</p>
                    <p className='text-[#667487]'>Previous Versions</p>
                    <p className='text-[#667487]'>Experimental Builds</p>
                    <p className='text-[#667487]'>Source Code</p>
                    <p className='text-[#667487]'>Release Notes</p>
                    <p className='text-[#667487]'>Requirements</p>

                    <p className='text-[#a4b0b9] font-medium mt-3'>Organization</p>
                    <p className='text-[#667487]'>People</p>
                    <p className='text-[#667487]'>Jobs</p>
                </div>
                <div className='lg:w-[18%] sm:w-[30%] w-[50%] lg:h-[100%] md:h-[50%] h-auto p-5'>
                    <p className='text-[#a4b0b9] font-medium'>About</p>
                    <p className='text-[#667487]'>Blender Foundation</p>
                    <p className='text-[#667487]'>Blender Institute</p>
                    <p className='text-[#667487]'>Blender Studio</p>
                    <p className='text-[#667487]'>License</p>
                    <p className='text-[#667487]'>Logo & Trademark</p>
                    <p className='text-[#667487]'>Credits</p>
                    <p className='text-[#667487]'>Privacy Policy</p>

                    <p className='text-[#a4b0b9] font-medium mt-3'>Articles</p>
                    <p className='text-[#667487]'>News</p>
                    <p className='text-[#667487]'>Press Releases</p>
                    <p className='text-[#667487]'>User Stories</p>
                </div>
                <div className='lg:w-[18%] sm:w-[30%] w-[50%] lg:h-[100%] md:h-[50%] h-auto p-5'>
                    <p className='text-[#a4b0b9] font-medium'>Get Involved</p>
                    <p className='text-[#667487]'>Dashboard</p>
                    <p className='text-[#667487]'>Development</p>
                    <p className='text-[#667487]'>Documentation</p>
                    <p className='text-[#667487]'>Education</p>
                    
                    <p className='text-[#a4b0b9] font-medium mt-3'>Donate</p>
                    <p className='text-[#667487]'>Development Fund</p>
                    <p className='text-[#667487]'>One-time Donations</p>

                    <p className='text-[#a4b0b9] font-medium mt-3'>Blender Studio</p>
                    <p className='text-[#667487]'>Firms</p>
                    <p className='text-[#667487]'>Training</p>
                </div>
                <div className='lg:w-[18%] sm:w-[30%] w-[50%] lg:h-[100%] md:h-[50%] h-auto p-5'>
                    <p className='text-[#a4b0b9] font-medium'>Developers</p>
                    <p className='text-[#667487]'>Get Started</p>
                    <p className='text-[#667487]'>Projects</p>
                    <p className='text-[#667487]'>Docs</p>
                    <p className='text-[#667487]'>Blog</p>
                    <p className='text-[#667487]'>Forum</p>
                    <p className='text-[#667487]'>Python API</p>
                    
                    <p className='text-[#a4b0b9] font-medium mt-3'>Support</p>
                    <p className='text-[#667487]'>Manual</p>
                    <p className='text-[#667487]'>Community</p>
                    <p className='text-[#667487]'>FAQ</p>

                    <p className='text-[#a4b0b9] font-medium mt-3'>Blender Conference</p>
                </div>
                <div className='lg:w-[18%] sm:w-[30%] w-[50%] border-[#667487] lg:h-[100%] md:h-[50%] h-auto p-5 mt-5'>
                    <p className='text-[#a4b0b9] font-medium'>Follow blender</p>
                    <div className='flex flex-row items-center mb-2 mt-5'>
                        <CiYoutube className='text-[#667487] me-3'/>
                        <p className='text-[#667487]'>Youtube</p>
                    </div>
                    <div className='flex flex-row items-center mb-2'>
                        <FiTwitter className='text-[#667487] me-3'/>
                        <p className='text-[#667487]'>X</p>
                    </div>
                    <div className='flex flex-row items-center mb-2'>
                        <IoLogoInstagram className='text-[#667487] me-3'/>
                        <p className='text-[#667487]'>Instagram</p>
                    </div>
                    <div className='flex flex-row items-center mb-2'>
                        <LuFacebook className='text-[#667487] me-3'/>
                        <p className='text-[#667487]'>Facebook</p>
                    </div>
                    <div className='flex flex-row items-center mb-2'>
                        <SlSocialLinkedin className='text-[#667487] me-3'/>
                        <p className='text-[#667487]'>Instagram</p>
                    </div>
                    <div className='flex flex-row items-center mb-2'>
                        <TbBrandMastodon className='text-[#667487] me-3'/>
                        <p className='text-[#667487]'>Instagram</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='h-[50px] bg-[#292d32] flex justify-center items-center'>
            <p className='text-[#667487] md:text-[15px] text-[12px]'>Designed by Kenneth Rockson @ 2024</p>
        </div>
    </div>
  )
}

export default Footer