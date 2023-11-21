import Hero from '@/components/sections/hero/hero'
import About from '@/components/sections/about/about'
import Services from '@/components/sections/services/services'
import Experts from '@/components/sections/experts/experts'
import Reviews from '@/components/sections/reviews/reviews'
import Callback from '@/components/sections/callback/callback'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Experts />
      <Reviews />
      <Callback />
    </>
  )
}
