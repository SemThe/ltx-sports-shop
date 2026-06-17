import Nav from '@/components/Nav/Nav'
import Hero from '@/components/Hero/Hero'
import Products from '@/components/Products/Products'
import Instagram from '@/components/Instagram/Instagram'
import Signature from '@/components/Signature/Signature'
import Story from '@/components/Story/Story'
import FeaturedVideo from '@/components/FeaturedVideo/FeaturedVideo'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Products />
        <Instagram />
        <Signature />
        <Story />
        <FeaturedVideo />
      </main>
      <Footer />
    </>
  )
}
