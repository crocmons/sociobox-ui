import React from 'react'

type props = {
    label:string, 
    iconURL:any,
    // variant:string
}

const Button = ({label, iconURL}:props) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-4 md:px-7 py-4 border text-xl text-center leading-none bg-[#55178E] rounded-full text-[#F1FAEE] font-bold border-[#55178E]`}>
        {label}
        <span className='ml-2 w-6 h-6'>
            {iconURL}
        </span>
    </button>
  )
}

export default Button