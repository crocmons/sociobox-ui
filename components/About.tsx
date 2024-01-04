import  Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

const About = () => {
  return (
    <section
      id='about'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-5xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-red-400'> Best </span>
          <span className='text-red-400 py-4'>Quality </span>
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted dresses
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Link href={'https://www.instagram.com/thesociobox'} className='mt-11'>
          <Button label='Our Instagram Page' iconURL={<BiRightArrowAlt />}/>
        </Link>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <Image
          src='/banner4.png'
          alt='inf detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default About;