"use client";
import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const page = () => {
    const service = [
        {
            img: "/image/image05.png",
            title: "Wedding Gowns",
            parah: "I am dedicated to celebrating your story; the one that is worth.",
            anchar: "learn more"
        },
        {
            img: "/image/image08.png",
            title: "Accessories",
            parah: "Through the years I crafted my own formula that allows me.",
            anchar: "learn more"
        },
        {
            img: "/image/image07.png",
            title: "Stationary",
            parah: "I craft my images based on natural light and the classic film.",
            anchar: "learn more"
        },
    ]
    return (
        <div>
            <div className="pages_name">
                <div className="container">
                    <div className="pages_name_wrap">
                        <h1> OUR SERVICE</h1>
                    </div>
                </div>
            </div>
            {/* section 03 start */}
            <div className='section_03'>
                <div className='container'>
                    <div className='section_03_wrap'>
                        <div className='secttion_02_wr_01'>
                            <h2></h2>
                            <p>OUR SERVICES</p>
                        </div>
                        <h2 className='main_heading'>Elegant solutions for every detail of your big day.</h2>
                    </div>
                    <div className='section_03_grid'>
                        {service.map((item, index) => (
                            <div className='section_03_grid_items'>
                                <div className='section_03_grid_itms_img' key={index}>
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.parah}</p>
                                <a href={item.anchar} className='btn_main'>Learn More</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
