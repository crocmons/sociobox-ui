import React from "react";
import Button from "./Button";
import Image from "next/image";
import { posts } from "@/constants";

type CardItem = {
  title: string;
  image: string;
  description: string;
};

const PostsCard = ({ title, image, description }: CardItem) => {
  return (
    <div className="shadow-xl mt-7 mb-5 cursor-pointer bg-transparent rounded-xl justify-center items-center text-center mx-auto py-2 px-5">
      <Image
        src={image}
        alt="map"
        width={500}
        height={500}
        className=" object-cover rounded"
      />
      <div className="p-6 mb-3 px-3">
        <h2 className="mb-3  sm:text-[20px] text-[18px] font-bold text-slate-800">
          {title}
        </h2>
        <p className=" sm:text-[16px] text-[14px]   font-normal text-gray-700">
          {description}
        </p>
        <button className="text-[#55178E] hover:text-[#7209B7] text-center mx-auto font-bold py-2 mt-4 px-4  rounded-full">
          See More
        </button>
      </div>
    </div>
  );
};


const Posts = () => {
  return (
    <div className="flex flex-col w-full h-full mt-5 py-2 font-bold text-center justify-center mx-auto items-center">
       <h2 className='font-palanquin capitalize text-5xl lg:max-w-lg font-bold text-[#531789] space-y-2'>
            Popular  
            {' '}<span className=" text-[#FF1791] font-bold">Posts</span>
        </h2>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-3 px-3 mx-auto">
        {posts.map((post) => (
          <PostsCard
            key={post.title}
            title={post.title}
            image={post.image}
            description={post.description}
          />
        ))}
      </div>
      </div>
  )
}


export default Posts;


