"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';

const navbar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const menuItems = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "SERVICE", link: "/service" },
    {
      name: "PROJECT", link: "/project",
    },
    { name: "BLOG", link: "/blog" },
    { name: "CONTACT", link: "/contact" },
  ];
  return (
    <div>
      {/* section 01 start */}


      <div className={`section01_navbar ${scroll ? "nav_white" : "nav_black"}`}>
        <div className='section_01_img'>
          <h2>FOR
            <Image
              src={scroll ? "/image/hearts.png" : "/image/heart.png"}
              alt="hero"
              width={64}
              height={64}
              loading="eager"
              priority={true}
            />
            WEDDING</h2>
        </div>
        <div className='section_01_nav'>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='section_01_navs'>
          <a className='btn_main' href='#'>GET STARTED</a>
        </div>
      </div>
    </div>
  )
}

export default navbar
