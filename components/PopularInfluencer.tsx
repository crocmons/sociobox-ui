"use client"
// import { populars } from "../constants";
// import Card  from "@/components/Card";
// import Slider from "react-slick";
import Carousel from "./Carousel";


const PopularInfluencer = () => {
 
  return (
    <section id='influencers' className='max-container max-sm:mt-12 mx-auto'>
      <div className='flex flex-col justify-start gap-5 mx-auto px-4 xl:px-2'>
        <h2 className='text-4xl text-[#2D1032] font-palanquin font-bold'>
          Our <span className='text-[#FF1791]'> Popular </span> Influencers
        </h2>
        <p className='lg:max-w-lg mt-2 text-lg font-montserrat text-[#3C1642]'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>



      <Carousel />
      {/* <Slider {...settings} className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 xl:gap-14'>
          {populars.map((inf) => (
              <Card key={inf.name} {...inf} />
        ))}
      </Slider> */}
    </section>
  );
};

export default PopularInfluencer;