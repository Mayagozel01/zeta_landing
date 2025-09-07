import { useState } from 'react'

import './App.css'
import './index.css'
import Banner from './components/banner/Banner'
import Marquee from './components/marquee/Marquee'
import AboutUs from './components/aboutus/AboutUs'
import ServicesCarousel from './components/services/ServicesCarousel'
import OurWork from './components/our_work/OurWork'
import Portfolio from './components/portfolio/Portfolio'
import ContactForm from './components/contactForm/ContactForm'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Blog from './components/blog/Blog'
import TestimonialCarousel from './components/testimonials/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Banner/>
  <Marquee/>
  <AboutUs/>
  <ServicesCarousel/>
  <OurWork/>
  <Marquee/>
  <Portfolio/>
  <Marquee/>
  <ContactForm/>
  <Marquee/>
  <TestimonialCarousel/>
  <Marquee/>
  <Blog/>
  <Marquee/>
  <Footer/>
    </>
  )
}

export default App
