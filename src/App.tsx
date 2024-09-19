import { useState } from 'react'
import './App.css'
import HeaderApp from './assets/components/header'
import HeroApp from './assets/components/hero'
import AboutApp from './assets/components/about'
import ServicesApp from './assets/components/services'
import GlobalApp from './assets/components/global-impact'
import ContactApp from './assets/components/contact'
import FooterApp from './assets/components/footer'
import TestimonialCarousel from './assets//components/testimonial'
import WhyChooseUsApp from './assets/components/why-choose-us'



function App() {
  

  return (
    <>
      <HeaderApp />

      <HeroApp />

      <AboutApp />

      <ServicesApp />
      
      <WhyChooseUsApp />
      
      <GlobalApp />
      
      <TestimonialCarousel />
     

      <ContactApp />

      <FooterApp />
    </>
  )
}

export default App
