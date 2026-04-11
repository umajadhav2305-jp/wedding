"use client";
import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import Image from 'next/image';

const page = () => {
    const projects = [
        {
            img: "/image/image16.png",
            title: "Garden Romance",
            location: "Bandung",
            date: "12 - 06 - 2023",
            anchar: "Project DetaiL",
            top: false,

        },
        {
            img: "/image/image17.png",
            title: "Garden Romance",
            location: "Bandung",
            date: "12 - 06 - 2023",
            anchar: "Project DetaiL",
            top: true,
        },
        {
            img: "/image/image18.png",
            title: "Garden Romance",
            location: "Bandung",
            date: "12 - 06 - 2023",
            anchar: "Project DetaiL",
            top: false,
        },
        {
            img: "/image/image19.png",
            title: "Garden Romance",
            location: "Bandung",
            date: "12 - 06 - 2023",
            anchar: "Project DetaiL",
            top: true,
        },
    ];

    return (
        <div>
            <div className="pages_name">
                <div className="container">
                    <div className="pages_name_wrap">
                        <h1> OUR PROJECT </h1>
                    </div>
                </div>
            </div>
            {/* SECTION 05 START */}
            <div className="section_05">
                <div className="container">
                    <div className="section_05_wr">
                        <div className='secttion_02_wr_01'>
                            <h2></h2>
                            <p>OUR PROJECT</p>
                        </div>
                        <h2 className="main_heading">Unforgettable stories we’ve crafted.</h2>
                    </div>
                    <div className="section_05_grid">
                        {projects.map((item, index) => (


                            <div key={index} className={`section_05_grid_items ${item.top ? "item.top" : ""}`}>
                                <div className="section_05_grid_items_img">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        width={640}
                                        height={400}
                                    />
                                    <div className="section_05_items_box">
                                        <div className="section_05_itms_box_icons">
                                            <a href="#"><IoLocationSharp />{item.location}</a>
                                            <a href="#"><FaRegCalendarAlt />{item.date}</a>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <a href="#" className="btn_main">{item.anchar}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="section_05_wrper">
                        <p className="parah">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus, arcu sed convallis sollicitudin, purus magna hendrerit nunc, sed aliquet erat arcu non nisi. Integer luctus eros nec sem sagittis, non faucibus arcu euismod. Sed varius.</p>
                        <a href="#" className="btn_main">LEARN MORE</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
