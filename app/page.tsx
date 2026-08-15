import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Industries from '@/components/sections/Industries'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Clients from '@/components/sections/Clients'
import Contact from '@/components/sections/Contact'

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <About />
        <Services />
        <Industries />
        <WhyChooseUs />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Page
