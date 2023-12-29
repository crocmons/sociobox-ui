import Image from 'next/image'
import React from 'react'

const InfluencerCard = ({imgURL,changeImg, bigImg}:any) => {

    const handleClick = ()=>{
        if(bigImg !== imgURL.socialInfluencer){
            changeImg(imgURL.socialInfluencer)
        }
    }
  return (
    <div className={`border-2 rounded-xl ${bigImg === imgURL.socialInfluencer ? "border-red-400" : "border-transparent"} cursor-pointer max-sm:flex-1`}
    onClick={handleClick}
    >
       <div className='flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
         <Image 
          src={imgURL.socialInfluencer}
          alt='influencerImg'
          width={127}
          height={103}
          className=' object-contain'
         />
       </div>
        </div>
  )
}

export default InfluencerCard