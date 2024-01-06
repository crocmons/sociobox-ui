"use client"
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import Image from 'next/image'

const heroImages = [
    {imgURL:'/testing1.png', alt:'testing'},
    {imgURL:'/testing2.jpg', alt:'testing'},
    {imgURL:'/banner1.png', alt:'testing'},
    {imgURL:'/banner4.png', alt:'testing'},
]

const HeroCarousel = () => {
  return (
    <div>
        <Carousel
         showThumbs={false}
         autoPlay
         infiniteLoop
         interval={2000}
         showArrows={false}
         showStatus={false}
        >
          {
            heroImages.map((imgs)=>(
                <Image 
                  src={imgs.imgURL}
                  alt={imgs.alt}
                  width={484}
                  height={484}
                  className=' object-contain'
                  key={imgs.imgURL}
                />
            ))
          }
        </Carousel>
        
        </div>
  )
}

export default HeroCarousel