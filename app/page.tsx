import About from '@/components/About'
import Clients from '@/components/Clients'
import Form from '@/components/Form'
import HeroSection from '@/components/HeroSection'
import PopularInfluencer from '@/components/PopularInfluencer'
import Posts from '@/components/Posts'
// import TestCard from '@/components/TestCard'

export default function Home() {
  return (
    <main className='mx-auto'>
      <section className='xl:padding-l'>
      <HeroSection />
      </section>
      <section>
        <Clients />
      </section>
      <section >
        <PopularInfluencer />
        {/* <TestCard /> */}
      </section>
      <section className='padding' >
        <About />
      </section>
      <section className='padding' >
        <Posts />
      </section>
      <section>
        <Form />
      </section>
    </main>
  )
}
