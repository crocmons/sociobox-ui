import Image from "next/image";

const Card = ({ imgURL, name, desc }:any) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <Image src={imgURL} alt={name} className='w-[282px] h-[282px]' />
      <div className='mt-8 flex justify-start gap-2.5'>
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          Latest
        </p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        {desc}
      </p>
    </div>
  );
};

export default Card;