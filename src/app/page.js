"use client"
import styles from './page.module.css'
// import HomePage from '../components/home/Home'
import About from '../components/about/About'
import Blog from '../components/blog/Blog'
import Services from '../components/services/Services'
import Contact from '../components/contact/Contact'
import Clients from '../components/clients/Clients'
import Footer from '../components/footer/Footer'
import Team from '../components/team/Team'
// import HomeSlider from "../components/slider/Slider"
import FooterTop from '../components/footerTop/FooterTop'
import Profile from '../components/profile/Profile'
import Hero from '@/components/herosection/Hero'
import FrequentlyAskQuestion from '@/components/frequentlyquestion/FrequentlyAskQuestion'
import "aos/dist/aos.css"
import Aos from 'aos'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
    const hidePreloader = () => {
      const preloader = document.querySelector("#preloader");
      preloader.classList.add("none");
      console.log("log");
    };

    if (document.readyState === "complete") {
      hidePreloader();
    } else {
      window.addEventListener("load", hidePreloader);
    } 
  }, []);
    return (
    <main>
      <Hero/>
      {/* <HomeSlider/> */}
      <main id="main">

      </main>
      {/* <HomePage/> */}
      <About/>
      <Services/>
      <Profile/>
      {/* <Team/> */}
      <Blog/>
      <Clients/>
      <FrequentlyAskQuestion/>
      <Contact/>

      <FooterTop/>
      <Footer/>

      <div id="preloader">
      </div>
    </main>
  )
}
