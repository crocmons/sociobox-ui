"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const Clients = () => {
    const settings = {
        infinite:true,
        slidesToShow:3,
        autoplay:true,
        speed:3000,
        autoplaySpeed:3000,
        cssEase:'linear'
    }

    const row1 = [
        '/adobelogo.png',
        '/amazonlogo.png',
        '/slacklogo.png',
        '/adobelogo.png',
        '/amazonlogo.png',
        '/slacklogo.png',
        
      ];
  return (
    <div className='my-12 py-5 '>
        <h2 className='text-[#531789] mt-8 py-2 font-bold text-5xl text-center'>Our <span className='text-[#FF1791]'>Brands</span></h2>
        <Slider {...settings}>
          {row1.map((ele, i)=>(
            <div key={i} className='flex flex-col items-center justify-center my-0 mx-auto text-center py-10 px-2'>
                <Image src={ele} alt='img1' width={120} height={120} />
         </div>
          ))}
        </Slider>
    </div>
  )
}

export default Clients