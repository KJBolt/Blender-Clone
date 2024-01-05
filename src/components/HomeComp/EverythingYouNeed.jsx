import React from 'react'

function EverythingYouNeed() {
  return (
    <div className='w-[100%] lg:px-20 px-5 bg-[#f2f2f3] h-auto lg:pt-10 pt-0'>
        <div className='relative flex md:flex-row flex-col w-[100%] h-[100%] lg:pt-5 pt-0'>
            <div className='w-[100%] md:px-10 px-0 py-10'>
                <h2 className='md:text-[66px] sm:text-[36px] text-[28px] text-[#4c4d52] font-bold leading-tight cursor-pointer hover:underline'>Everything You Need</h2>

                <div className='h-[100%] w-[100%] md:pt-20 lg:pt-10 pt-0'>
                    {/* First Section */}
                    <div className='flex xl:flex-row flex-col items-center'>
                        <div className='xl:w-[50%] w-[100%] xl:h-[500px] h-[auto] p-10'>
                            <h3 className='text-[#5a4d52] md:text-[36px] text-[28px] mb-4 font-medium'>Cycles Render Engine</h3>
                            <p className='md:text-[22px] text-[19px] mb-4 text-[#5a4d52]'>Cycles is Blender’s built-in powerful unbiased path-tracer engine that offers stunning ultra-realistic rendering.</p>
                            <ul className='list-disc ps-10'>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Real-time viewport preview</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>CPU & GPU rendering</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>PBR shaders & HDR lighting support</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>VR rendering support</li>
                            </ul>
                        </div>
                        <div className=' md:h-[500px] h-[auto] p-10'>
                            <img className='rounded-xl w-[100%] h-[100%] object-cover transform hover:scale-105 transition-transform duration-300' src="https://www.blender.org/wp-content/uploads/2019/07/blender_render-1280x720.jpg?x12104" alt="" />
                        </div>
                    </div>

                    {/* Second Section */}
                    <div className='flex xl:flex-row flex-col items-center'>
                        <div className=' md:h-[500px] h-[auto] p-10'>
                            <img className='rounded-xl w-[100%] h-[100%] object-cover transform hover:scale-105 transition-transform duration-300' src="https://www.blender.org/wp-content/uploads/2019/07/modeling02-1280x720.jpg?x12104" alt="" />
                        </div>
                        <div className='xl:w-[50%] w-[100%] xl:h-[550px] h-[auto] p-10'>
                            <h3 className='text-[#5a4d52] md:text-[36px] text-[28px] mb-4 font-medium'>Modeling, Sculpt, UV</h3>
                            <p className='md:text-[22px] text-[19px] mb-4 text-[#5a4d52]'>Blender’s comprehensive array of modeling tools make creating, transforming and editing your models a breeze.</p>
                            <ul className='list-disc ps-10'>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Full N-Gon support</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Edge slide, inset, grid and bridge fill, and more</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Advanced sculpting tools and brushes</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Multi-resolution and Dynamic subdivision</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>3D painting with textured brushes and masking</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Python scripting for custom tools and add-ons</li>
                            </ul>
                        </div>
                    </div>

                    {/* Third Section */}
                    <div className='flex xl:flex-row flex-col items-center'>
                        <div className='xl:w-[50%] w-[100%] xl:h-[600px] h-[auto] p-10'>
                            <h3 className='text-[#5a4d52] md:text-[36px] text-[28px] mb-4 font-medium'>VFX</h3>
                            <p className='md:text-[22px] text-[19px] mb-4 text-[#5a4d52]'>VFX professionals say: “Probably the best tracker in the market”. Blender includes production ready camera and object tracking. Allowing you to import raw footage, track the footage, mask areas and see the camera movements live in your 3D scene. Eliminating the need to switch between programs.</p>
                            <ul className='list-disc ps-10'>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Auto and Manual tracking</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Powerful camera reconstruction</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Real-time preview of your tracked footage and 3D scene</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Support for Planar tracking and Tripod solvers</li>
                            </ul>
                        </div>
                        <div className=' md:h-[500px] h-[auto] p-10'>
                            <img className='rounded-xl w-[100%] h-[100%] object-cover transform hover:scale-105 transition-transform duration-300' src="https://www.blender.org/wp-content/uploads/2019/07/blender_vfx-1280x720.jpg?x12104" alt="" />
                        </div>
                    </div>

                    {/* Fourth Section */}
                    <div className='flex xl:flex-row flex-col items-center'>
                        <div className=' md:h-[500px] h-[auto] p-10'>
                            <img className='rounded-xl w-[100%] h-[100%] object-cover transform hover:scale-105 transition-transform duration-300' src="https://www.blender.org/wp-content/uploads/2019/07/animation01-1280x720.jpg?x12104" alt="" />
                        </div>
                        <div className='xl:w-[50%] w-[100%] xl:h-[500px] h-[auto] p-10'>
                            <h3 className='text-[#5a4d52] md:text-[36px] text-[28px] mb-4 font-medium'>Animation & Rigging</h3>
                            <p className='md:text-[22px] text-[19px] mb-4 text-[#5a4d52]'>Thanks to the high quality rigging and animation tools, Blender is being used for numerous short films, advertisements, TV series and feature films now.</p>
                            <ul className='list-disc ps-10'>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Envelope, skeleton and automatic skinning</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>B-spline interpolated bones</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Curve editor and dope sheets</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Custom bone shapes for fast input</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Sound synchronization</li>
                            </ul>
                        </div>
                    </div>

                    {/* Fifth Section */}
                    <div className='flex xl:flex-row flex-col items-center'>
                        <div className='xl:w-[50%] w-[100%] xl:h-[500px] h-[auto] p-10'>
                            <h3 className='text-[#5a4d52] md:text-[36px] text-[28px] mb-4 font-medium'>Story Art, Drawing 2D in 3D</h3>
                            <p className='md:text-[22px] text-[19px] mb-4 text-[#5a4d52]'>Really! Drawing directly in a 3D viewport makes a lot of sense. It opens unsurpassed workflow freedom for story-boarders and 2D artists.</p>
                            <ul className='list-disc ps-10'>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Combine 2D with 3D right in the viewport</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Full Animation Support with Onion Skinning</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Layers & Colors for Stroke and Fill</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Sculpt brush strokes & Parent to 3D objects</li>
                            </ul>
                        </div>
                        <div className=' md:h-[500px] h-[auto] p-10'>
                            <img className='rounded-xl w-[100%] h-[100%] object-cover transform hover:scale-105 transition-transform duration-300' src="https://www.blender.org/wp-content/uploads/2019/07/hero_p31_screenshot-1280x720.jpg?x12104" alt="" />
                        </div>
                    </div>

                    {/* Sixth Section */}
                    <div className='flex xl:flex-row flex-col items-center'>
                        <div className=' md:h-[500px] h-[auto] p-10'>
                            <img className='rounded-xl w-[100%] h-[100%] object-cover transform hover:scale-105 transition-transform duration-300' src="https://www.blender.org/wp-content/uploads/2019/07/vse_custom_grade-1280x720.jpg?x12104" alt="" />
                        </div>
                        <div className='xl:w-[50%] w-[100%] xl:h-[550px] h-[auto] p-10'>
                            <h3 className='text-[#5a4d52] md:text-[36px] text-[28px] mb-4 font-medium'>Make it Your Own</h3>
                            <p className='md:text-[22px] text-[19px] mb-4 text-[#5a4d52]'>Blender has a flexible Python controlled interface. Layout, colors, size and even fonts can be adjusted. Use hundreds of add-ons by the community or create your own using Blender’s accessible Python API.</p>
                            <ul className='list-disc ps-10'>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Customize the interface layout and colors</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Hi-res/Retina screen support</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Create your own tools and add-ons</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Draw over the OpenGL viewport</li>
                                <li className='md:text-[22px] text-[19px] text-[#5a4d52] font-normal'>Connect with Blender’s Render API</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                
                
                
            </div>
        </div>
    </div>
  )
}

export default EverythingYouNeed