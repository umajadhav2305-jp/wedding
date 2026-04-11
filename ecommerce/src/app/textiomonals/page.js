"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import Image from 'next/image';


const page = () => {
    const testimonals = [
        {
            imgLeft: "/image/image29.png",
            imgRight: "/image/comma.png",
            title: "Mary & John",
            parah: "Thank you so much for making our wedding day so amazing and the best day of our lives! It really was like a dream come true, and everything was perfect. Can we do it all again please!?",
            anchar: "VIEW THEIR STORY",
        },
        {
            imgLeft: "/image/image30.png",
            imgRight: "/image/comma.png",
            title: "Anna & Paul",
            parah: "My husband and I couldn’t have dreamt of a more beautiful place to host our wedding. Not only are the views breathtaking but the entire ranch looks like something out of a movie.",
            anchar: "VIEW THEIR STORY",
        },
        {
            imgLeft: "/image/image31.png",
            imgRight: "/image/comma.png",
            title: "Jane & Peter",
            parah: "Just wanted to thank you all for our fairytale wedding. You guys took care of every detail and we loved every second of our special day. I can’t tell you how many people said it's beautiful.",
            anchar: "VIEW THEIR STORY",
        },
        {
            imgLeft: "/image/image32.png",
            imgRight: "/image/comma.png",
            title: "Rubel & mariya",
            parah: "Thank you so much for making our wedding day so amazing and the best day of our lives! It really was like a dream come true, and everything was perfect. Can we do it all again please!?",
            anchar: "VIEW THEIR STORY",
        },
        {
            imgLeft: "/image/image33.png",
            imgRight: "/image/comma.png",
            title: "Niles & John",
            parah: "My husband and I couldn’t have dreamt of a more beautiful place to host our wedding. Not only are the views breathtaking but the entire ranch looks like something out of a movie.",
            anchar: "VIEW THEIR STORY",
        },
    ]
    return (
        <div>
            <div className="pages_name">
                <div className="container">
                    <div className="pages_name_wrap">
                        <h1>OUR TESTIMONALS</h1>
                    </div>
                </div>
            </div>
            {/* section 07 start */}
            <div className="section_07">
                <div className="container">
                    <div className="section_07_wrap">
                        <div className='secttion_02_wr_01'>
                            <h2></h2>
                            <p>OUR TESTIMONALS</p>
                        </div>
                        <h2 className="main_heading">Real stories from brides and grooms who trusted Sienna</h2>
                    </div>
                    <Swiper
                        loop={true}
                        speed={1200}
                        effect="slide"
                        slidesPerView={1}
                        spaceBetween={0}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {testimonals.map((item, index) => (


                            <SwiperSlide key={index}>
                                <div className="section_07_grid">

                                    <div className="section_07_grid_left">
                                        <Image
                                            src={item.imgLeft}
                                            alt={item.title}
                                            width={680}
                                            height={420}
                                        />
                                    </div>
                                    <div className="section_07_grid_right">
                                        <div className="section_07_grid_right_img">
                                            <Image
                                                src={item.imgRight}
                                                alt={item.title}
                                                width={64}
                                                height={64}
                                            />
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p className="parah">{item.parah}</p>
                                        <a href="#" className="btn_main">{item.anchar}</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default page
