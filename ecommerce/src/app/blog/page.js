"use client";
import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const page = () => {
    const blog = [
        {
            img: "/image/image34.png",
            date: "OCTOBER 4, 2025",
            tag: "VENUE",
            title: "Planning Destination Weddings with Ease",
        },
        {
            img: "/image/image35.png",
            date: "OCTOBER 4, 2025",
            tag: "VENUE",
            title: "Choosing the Best Venue for Weddings",
        },
        {
            img: "/image/image36.png",
            date: "OCTOBER 4, 2025",
            tag: "VENUE",
            title: "How to Design Unique Wedding Invitations",
        },
    ];
    return (
        <div>
            <div className="pages_name">
                <div className="container">
                    <div className="pages_name_wrap">
                        <h1> OUR BLOG</h1>
                    </div>
                </div>
            </div>
            {/* section 08 start */}
            <div className="section_08">
                <div className="container">
                    <div className="section_08_wrap">
                        <div className="section_08_wrap_left">
                            <div className='secttion_02_wr_01'>
                                <h2></h2>
                                <p>BLOG</p>
                            </div>
                            <h2 className="main_heading">Stories, ideas, and inspirations</h2>
                        </div>
                        <div className="section_08_wrap_right">
                            <a href="#" className="btn_main">SEE MORE</a>
                        </div>
                    </div>
                    <div className="section_08_grid">
                        {blog.map((item, index) => (
                            <div className="section_08_grid_items" key={index}>
                                <div className="section_08_grid_items_img">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        width={400}
                                        height={270}
                                    />
                                </div>
                                <div className="section_08_grid_items_content">
                                    <div className="section_08_grid_items_anchar">
                                        <a href="#">{item.date}</a>
                                        <a href="#">{item.tag}</a>
                                    </div>
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
