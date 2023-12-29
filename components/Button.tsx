import React from 'react'

type props = {
    label:string, 
    iconURL:any
}

const Button = ({label, iconURL}:props) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none bg-red-400 rounded-full text-white border-red-400'>
        {label}
        <span className='ml-2 w-6 h-6'>
            {iconURL}
        </span>
    </button>
  )
}

export default Button