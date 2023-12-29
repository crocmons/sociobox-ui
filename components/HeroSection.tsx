"use client"
import React, { useState } from 'react'
import Button from './Button'
import { BiRightArrowAlt } from "react-icons/bi";
import { influencers, statistics } from '@/constants';
import Image from 'next/image';
import InfluencerCard from './InfluencerCard';
import firstImg from "@/public/banner2.jpeg"

const HeroSection = () => {
  const [bigInfluImg, setBigInfluImg] = useState(firstImg)
  return (
    <section
    id='home'
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 xl:max-w-[1440px] my-0 mx-auto '
    >
   <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
    <p className='text-xl font-medium text-red-400'>Social Media Influencer</p>
    <h1 className='mt-10 text-5xl xl:text-8xl font-palanquin sm:max-sm:text-[72px] sm:max-sm:leading-[82] font-bold leading-none mx-auto'>
      <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The Social Box</span>
      <br />
      Media
      <span className='text-red-400 inline-block mt-3'> Influencers</span>
      </h1>
      <p className='font-montserrat text-slate-600 text-lg leading-8 py-6 sm:max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, numquam!</p>
      <Button 
      label="See all influencers "
      iconURL = {<BiRightArrowAlt />}
      />

      <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
        {statistics.map((data)=>(
          <div key={data.label}>
            <p className='text-4xl font-palanquin font-bold'>{data.value}</p>
            <p className='leading-7 font-montserrat text-slate-700'>{data.label}</p>
          </div>
        ))}
      </div>

   </div>


   {/* right container  */}
        <div className='relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 mt-28 bg-white bg-cover bg-hero bg-center'>
          <Image 
           src={bigInfluImg}
           alt='img1'
           width={500}
           height={500}
           className='object-contain relative z-10'
          />

          <div className='flex sm:gap-6 gap-4 absolute -bottom-[12%] sm:left-[10%] max-sm:px-6'>
            {influencers.map((inf, i)=>(
               <div key={i}>
                <InfluencerCard index={i} imgURL={inf} changeImg={(infImg : any)=> setBigInfluImg(infImg)}
                bigImg={bigInfluImg}
                />
                 
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default HeroSection