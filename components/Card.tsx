import Image from "next/image";

const Card = ({ imgURL, name, desc }:any) => {
  return (
    <div className='flex flex-1 flex-col xl:py-5 xl:w-full max-sm:w-full w-[50%]'>
      <Image src={imgURL} alt={name} width={300} height={300} className="object-contain" />
      {/* <div className='mt-8 flex justify-start gap-2.5'>
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          Latest
        </p>
      </div> */}
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