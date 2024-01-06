"use client"
import React from 'react'
import { Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination} from 'swiper/modules'
import {RxArrowTopRight} from 'react-icons/rx'
import { influencers } from '@/constants';


const Carousel = () => {
  return (
    <div className='py-2 xl:py-16 mx-auto flex flex-col items-center justify-center'>
            <Swiper
              breakpoints={{
                340:{
                    slidesPerView:2,
                    spaceBetween: 15,
                },
                700:{
                    slidesPerView:3,
                    spaceBetween: 15,
                },
                
              }}

              freeMode={true}
              autoplay={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, FreeMode]}
              className='max-w-[90%] lg:max-w-[100%]'
              
            >
                { influencers.map((inf,i)=>(
                   <SwiperSlide key={i}>
                       <div className='mb-20 flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-1 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] mx-auto'>
                          
                          <div className='absolute inset-0 rounded-md bg-cover bg-center' style={{ backgroundImage: `url(${inf.thumbnail})`}} />

                          </div>
                   </SwiperSlide>
                ))}

            </Swiper>
    </div>
  )
}

export default Carousel






















// "use client"

// import { influencers } from "@/constants"

// import React, { useState } from 'react'

// const Carousel = () => {
//     const [curr, setCurr] = useState(0)
//   return (
//     // <div></div>
//     <div className="flex overflow-hidden relative">
//      {influencers.map((inf)=>(
//         <div
//         className={`${inf.thumbnail}`}
//         >
//             <div className="">

//             </div>
//         </div>
//      ))}
//     </div>
//   )
// }

// export default Carousel
