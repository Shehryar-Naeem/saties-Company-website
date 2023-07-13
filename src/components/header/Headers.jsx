"use client";

import a from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
// import { signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouseMedicalCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    id: 1,
    title: "Home",
    url: "#home",
  },
  {
    id: 2,
    title: "About",
    url: "#about",
  },
  {
    id: 3,
    title: "Services",
    url: "#services",
  },
  {
    id: 4,
    title: "Portfolio",
    url: "#team",
  },
  {
    id: 5,
    title: "Contact",
    url: "#contact",
  },
  {
    id: 6,
    title: "Marketing",
    url: "#blog",
  },
];

const Header = () => {
  //   const session = useSession();
  const [open,setOpen] = useState(false)


  const Menu = <FontAwesomeIcon icon={faBars} />;
  const logoicon = <FontAwesomeIcon icon={faHouseMedicalCircleExclamation} />;
  return (
    
    <header className={styles.container}>

      <a href="/" className={styles.logo}>
        <i>{logoicon}</i>
        <span>Saties</span>
      </a>
      <ul className={open ? `${styles.navbar} ${styles.open}`:styles.navbar}>
        {links.map((link) => (
          <li>
            <a key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.main}>
        <DarkModeToggle />
        <div className={styles.menuicon} onClick={()=>setOpen(!open)}>{Menu}</div>
      </div>

    </header>
  );
};

export default Header;
