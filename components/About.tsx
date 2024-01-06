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
        <h2 className='font-palanquin capitalize text-5xl lg:max-w-lg font-bold text-[#2D1032] space-y-2'>
          We Provide You
          <span className='text-[#531789]'> Best </span>
          <span className='text-[#FF1791] py-4'>Quality </span>
        </h2>
        <p className='mt-6 py-4 lg:max-w-lg info-text text-[#3C1642]'>
        The Socio Box is proudly led by Azhar Shaikh, better known to millions as ’Pinku’ from the beloved Indian sitcom, Taarak Mehta Ka Ooltah Chashmah. 
We handle everything from talent discovery and management to breathtaking video production and expert social media management. Plus, our powerful influencer marketing platform connects you with the perfect brand ambassadors
Imagine not just boosting your reach, but using your influence for good. Partner with influencers who share your values and create campaigns that spark positive change.
We help you find causes that resonate with your brand and leverage influencer voices to make a real impact.



        </p>
        <p className='py-2 lg:max-w-lg info-text'>
        Here is why the socio box can be your right companion for your growth
Connecting brands and influencers with shared values and a commitment to social responsibility.
Facilitating campaigns that drive both business growth and positive impact.
Amplifying voices that promote positive change and make the world a better place


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