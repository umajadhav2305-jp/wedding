"use client";
import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const page = () => {
  const planned = [
    { number: "120+", item: "Wedding Planned", },
    { number: "0+", item: "Year Experience" },
    { number: "300+", item: "Happy Couples" },
    { number: "20+", item: "Venue Partnerd" },
  ];
  return (
    <div>
      <div className="pages_name">
        <div className="container">
          <div className="pages_name_wrap">
            <h1>ABOUT</h1>
            <h2>hello react </h2>
          </div>
        </div>
      </div>
      {/* section 02 start */}
      <div className='section_02'>
        <div className='container'>
          <div className='section_02_wr'>
            <div className='secttion_02_wr_01'>
              <h2></h2>
              <p>ABOUT US</p>
            </div>
            <h2 className='main_heading'>BLENDING CREATIVITY, DETAIL, AND CARE TO CRAFT  UNFORGGETTABLE CELEBRATIONS.</h2>
          </div>
          <div className='section_02_grid'>
            <div className='section_02_grid_left'>
              <Image
                src="/image/image03.png"
                alt="Description of my image"
                width={650}
                height={350}
              />
            </div>
            <div className='section_02_grid_right'>
              <p className="parah">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus, arcu sed convallis sollicitudin, purus magna hendrerit nunc, sed aliquet erat arcu non nisi. Integer luctus eros nec sem sagittis, non faucibus arcu euismod. Sed varius, lectus at tristique blandit, velit lacus malesuada mauris, sit amet gravida eros augue in metus. Vestibulum vel felis nec nunc elementum.</p>
              <a className='btn_main' href='#'>LEARN MORE</a>
            </div>
          </div>
          <div className='section_02_wrapper'>
            {planned.map((item, index) => (
              <div className='section_02_wrapper_itms' key={index}>
                <h1>{item.number}</h1>
                <p>{item.item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
