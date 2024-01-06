"use client"
import React, { useState } from 'react'
import Button from './Button'
import { BiRightArrowAlt } from "react-icons/bi";
import {  statistics } from '@/constants';
import Image from 'next/image';
// import InfluencerCard from './InfluencerCard';
import firstImg from "@/public/testing1.png"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'


const heroImages = [
  {imgURL:'/testing1.png', alt:'testing'},
  {imgURL:'/testing2.jpg', alt:'testing'},
  {imgURL:'/banner1.png', alt:'testing'},
  {imgURL:'/banner4.png', alt:'testing'},
]




const HeroSection = () => {
  // const [bigInfluImg, setBigInfluImg] = useState(firstImg)
  
  
  return (
    <section
    id='home'
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 xl:max-w-[1440px] mt-6 md:mt-16 mx-auto '
    >
   <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x mt-24 md:mt-0">
    <p className='text-xl font-medium text-[#FF1791]'>Azhar shaikh presents</p>
    <h1 className='mt-10 xl:py-4 py-2 text-4xl xl:text-8xl font-palanquin sm:max-sm:text-[72px] sm:max-sm:leading-[82] font-bold leading-none mx-auto '>

    <span className='text-[14px] xl:text-4xl'>Influencer Marketing Made Easy </span>

      <span className='xl:bg-purple-200 xl:whitespace-nowrap relative xl:z-10 xl:pr-10 xl:bg-opacity-10 mt-6'>The Socio Box</span>
      
      <span className='text-[#FF1791] inline-block mt-2 text-md'> Influencer </span> 

      
      </h1>
      <p className='font-montserrat text-base md:text-lg leading-8 py-6 sm:max-w-sm'>
      Want to build followers or expand your reach<br/>
Hi, we are the socio box your one step door to all the questions that took you here


</p>
      <Button 
      label="See all influencers "
      iconURL = {<BiRightArrowAlt />}
      />

      <div className='flex justify-start items-start flex-wrap w-full mt-16 gap-16'>
        {statistics.map((data)=>(
          <div key={data.label}>
            <p className='text-4xl font-palanquin font-bold'>{data.value}</p>
            <p className='leading-7 font-montserrat text-[#FF1791]'>{data.label}</p>
          </div>
        ))}
      </div>

   </div>


   {/* right container  */}
        {/* <div className='relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-56 mt-28 bg-white bg-cover mx-auto'> */}

<div className='relative sm:px-10 py-5 sm:pt-20 pb-5 max-w-[560px] xl:h-[700px] w-full bg-[#FFF700] rounded-[30px] sm:mx-auto xl:my-6'>


        <Carousel
         showThumbs={false}
         autoPlay
         infiniteLoop
         interval={3000}
         showArrows={false}
         showStatus={false}
        >
          {
            heroImages.map((imgs)=>(
                <Image 
                  src={imgs.imgURL}
                  alt={'testing demo img'}
                  width={484}
                  height={484}
                  className=' object-contain'
                  key={imgs.alt}
                />
            ))
          }
        </Carousel>

                  <Image 
                          src='/arrow.svg'
                          alt='arrow'
                          width={175}
                          height={175}
                          className='max-xl:hidden absolute -left[15%] bottom-0 z-0 xl:right-[85%]'
                          />
        


          
        
          {/* <Image 
           src={bigInfluImg}
           alt='img1'
           width={500}
           height={500}
           className='object-contain relative z-10 rounded-xl'
          /> */}
          {/* <div className='flex sm:gap-6 gap-4 absolute -bottom-[12%] sm:left-[10%] max-sm:px-6'>
            {influencers.map((inf, i)=>(
               <div key={i}>
                <InfluencerCard index={i} imgURL={inf} changeImg={(infImg : any)=> setBigInfluImg(infImg)}
                bigImg={bigInfluImg}
                />
              </div>
            ))}
          </div> */}
        </div>
    </section>
  )
}

export default HeroSection