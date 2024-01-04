import About from '@/components/About'
import Clients from '@/components/Clients'
import Form from '@/components/Form'
import HeroSection from '@/components/HeroSection'
import Partners from '@/components/Partners'
import PopularInfluencer from '@/components/PopularInfluencer'

export default function Home() {
  return (
    <main className='mx-auto relative'>
      <section className='xl:padding-l wide:padding-r padding-b'>
      <HeroSection />
      </section>
      <section>
        <Clients />
      </section>
      <section className='padding'>
        <PopularInfluencer />
      </section>
      <section className='padding'>
        <About />
      </section>
      <section>
        <Form />
      </section>
    </main>
  )
}
