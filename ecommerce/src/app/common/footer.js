"use client";
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const footerLinks = [
    {
      title: "QUICK LINKS",
      items: [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Project", link: "/project" },
        { name: " Contact", link: "/contact" }
      ],
    },
    {
      title: "SERVICES",
      items: [
        { name: "Full Planning", link: "#" },
        { name: "Day Cordination", link: "#" },
        { name: "Venue & Vendor", link: "#" },
        { name: "Design & Stylling", link: "#" },
      ],
    },
    {
      title: "CONTACT US",
      items: [
        { name: "+1234567890", link:"tel:+1234567890" },
        { name: "forwedding@mail.com", link: "mailto:forwedding@mail.com" },
        { name: "15 Anggrek Street, Menteng, Central Jakarta", link: "#" },
      ],
    },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/" },
    { icon: <FaTwitter />, link: "https://x.com/" },
  ];

  return (
    <>
      {/* footer start */}
      <div className="footer">
        <div className="container">
          <div className="footer_grid">
            <div className="footer_grid_left">
              <div className='section_01_img'>
                <h2>FOR
                  <Image
                    src="/image/heart.png"
                    alt="hero"
                    width={64}
                    height={64}
                    loading="eager"
                    priority={true}
                  />
                  WEDDING</h2>
                <div className="newsletter">
                  <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                  <div className="input_newsletter">
                    <input type="text" placeholder="Your Email" />
                    <span><MdEmail /></span>
                  </div>
                </div>

              </div>
            </div>
            <div className="footer_grid_right">
              {footerLinks.map((section, index) => (
                <div className="footer_grid_right_items" key={index}>
                  <h3>{section.title}</h3>

                  {section.items.map((item, subIndex) => (
                    <a href={item.link} key={subIndex}>{item.name}</a>
                  ))}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      {/* footer 02 start  */}
      <div className="footer_02">
        <div className="container">
          <div className="footer_wr">
            <p className="parah">Copyright © 2025 | Bohu | All Rights Reserved</p>
            <div className="footer_icons">
              {socialIcons.map((item, index) => (
                <a href={item.link} key={index}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

