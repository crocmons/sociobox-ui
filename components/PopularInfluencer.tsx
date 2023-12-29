import { populars } from "../constants";
import Card  from "@/components/Card";

const PopularInfluencer = () => {
  return (
    <section id='influencers' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-red-400'> Popular </span> Influencers
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {populars.map((inf) => (
          <Card key={inf.name} {...inf} />
        ))}
      </div>
    </section>
  );
};

export default PopularInfluencer;