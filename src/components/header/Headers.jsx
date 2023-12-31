// "use client";

// import a from "next/link";
// import React, { useEffect, useState } from "react";
// import styles from "./header.module.css";
// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
// // import { signOut, useSession } from "next-auth/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBars,
//   faHouseMedicalCircleExclamation,
// } from "@fortawesome/free-solid-svg-icons";

// const links = [
//   {
//     id: 1,
//     title: "Home",
//     url: "#home",
//   },
//   {
//     id: 2,
//     title: "About",
//     url: "#about",
//   },
//   {
//     id: 3,
//     title: "Services",
//     url: "#services",
//   },
//   {
//     id: 4,
//     title: "Portfolio",
//     url: "#team",
//   },
//   {
//     id: 5,
//     title: "Contact",
//     url: "#contact",
//   },
//   {
//     id: 6,
//     title: "Marketing",
//     url: "#blog",
//   },
// ];

// const Header = () => {
//   //   const session = useSession();
//   const [open,setOpen] = useState(false)

//   const [isSticky, setIsSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       setIsSticky(scrollTop > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   const Menu = <FontAwesomeIcon icon={faBars} />;
//   const logoicon = <FontAwesomeIcon icon={faHouseMedicalCircleExclamation} />;
//   return (
    
//     <header className={`${styles.container} ${isSticky ? styles.sticky : ""}`}>

//       <a href="/" className={styles.logo}>
//         <i>{logoicon}</i>
//         <span>Saties</span>
//       </a>
//       <ul className={open ? `${styles.navbar} ${styles.open}`:styles.navbar}>
//         {links.map((link) => (
//           <li>
//             <a key={link.id} href={link.url} className={styles.link}>
//               {link.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//       <div className={styles.main}>
//         {/* <DarkModeToggle /> */}
//         <div className={styles.menuicon} onClick={()=>setOpen(!open)}>{Menu}</div>
//       </div>

//     </header>
//   );
// };

// export default Header;









"use client";

import React from "react";
import logo from "../../../public/logo/weiblock.png"
import Image from "next/image";



const Header = () => {

  if (typeof window !== 'undefined') {
    (function(){
      const select = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
      }
    
      /**
       * Easy event listener function
       */
      const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
          if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
          } else {
            selectEl.addEventListener(type, listener)
          }
        }
      }
    
      /**
       * Easy on scroll event listener 
       */
      const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
      }
    
      /**
       * Navbar links active state on scroll
       */
      let navbarlinks = select('#navbar .scrollto', true)
      const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
          if (!navbarlink.hash) return
          let section = select(navbarlink.hash)
          if (!section) return
          if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
          } else {
            navbarlink.classList.remove('active')
          }
        })
      }
      window.addEventListener('load', navbarlinksActive)
      onscroll(document, navbarlinksActive)
    
      /**
       * Scrolls to an element with header offset
       */
      const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight
    
        let elementPos = select(el).offsetTop
        window.scrollTo({
          top: elementPos - offset,
          behavior: 'smooth'
        })
      }
    
      /**
       * Toggle .header-scrolled class to #header when page is scrolled
       */
      let selectHeader = select('#header')
      if (selectHeader) {
        const headerScrolled = () => {
          if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled')
          } else {
            selectHeader.classList.remove('header-scrolled')
          }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
      }
    
      /**
       * Back to top button
       */
      let backtotop = select('.back-to-top')
      if (backtotop) {
        const toggleBacktotop = () => {
          if (window.scrollY > 100) {
            backtotop.classList.add('active')
          } else {
            backtotop.classList.remove('active')
          }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
      }
    
      /**
       * Mobile nav toggle
       */
      on('click', '.mobile-nav-toggle', function(e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
      })
    
      /**
       * Mobile nav dropdowns activate
       */
      on('click', '.navbar .dropdown > a', function(e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
          e.preventDefault()
          this.nextElementSibling.classList.toggle('dropdown-active')
        }
      }, true)
    
      /**
       * Scrool with ofset on links with a class name .scrollto
       */
      on('click', '.scrollto', function(e) {
        if (select(this.hash)) {
          e.preventDefault()
    
          let navbar = select('#navbar')
          if (navbar.classList.contains('navbar-mobile')) {
            navbar.classList.remove('navbar-mobile')
            let navbarToggle = select('.mobile-nav-toggle')
            navbarToggle.classList.toggle('bi-list')
            navbarToggle.classList.toggle('bi-x')
          }
          scrollto(this.hash)
        }
      }, true)
    
      /**
       * Scroll with ofset on page load with hash links in the url
       */
      window.addEventListener('load', () => {
        if (window.location.hash) {
          if (select(window.location.hash)) {
            scrollto(window.location.hash)
          }
        }
      });
    })()
  }

  return (
    <>
      {/* <!-- ======= Header ======= --> */}
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      {/* <h1 class="logo me-auto"><a href="index.html"><Image src={logo} alt="weiblock"/></a></h1> */}
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <!--  */}
      <a class="logo me-auto"><img src={"/logo/weiblock.png"} alt="weiblock" class="img-fluid"/></a>
      {/* --> */}

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto" href="#portfolio">Portfolio</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          {/* <li><a class="getstarted scrollto" href="#about">Get Started</a></li> */}
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* <!-- .navbar --> */}

    </div>
  </header>
  {/* <!-- End Header --> */}
    </>
  );
};

export default Header;
