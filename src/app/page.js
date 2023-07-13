import Image from 'next/image'
import styles from './page.module.css'
import HomePage from '../components/home/Home'
import About from '@/components/about/About'
import Blog from '@/components/blog/Blog'
import Services from '@/components/services/Services'
import Contact from '@/components/contact/Contact'
import Clients from '@/components/clients/Clients'
import Footer from '@/components/footer/footer'
import Team from '@/components/team/Team'
import HomeSlider from "@/components/slider/Slider"
import FooterTop from '@/components/footerTop/FooterTop'
import Profile from '@/components/profile/Profile'

export default function Home() {
  return (
    <main>
      {/* <HomeSlider/> */}
      <HomePage/>
      <About/>
      <Services/>
      <Profile/>
      {/* <Team/> */}
      <Blog/>
      <Clients/>
      <Contact/>
      <FooterTop/>
      <Footer/>
      
    </main>
  )
}
