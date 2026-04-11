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
    const menuItems = [
        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "/about" },
        { name: "SERVICE", link: "/service" },
        { name: "PORTFOLIO", link: "/portfolio" },
        { name: "BLOG", link: "/blog" },
        { name: "CONTACT", link: "/contact" },
    ];
    const planned = [
        { number: "120+", item: "Wedding Planned", },
        { number: "0+", item: "Year Experience" },
        { number: "300+", item: "Happy Couples" },
        { number: "20+", item: "Venue Partnerd" },
    ];
    const storyData = [
        {
            imgLeft: "/image/image10.png",
            imgRight: "/image/image11.png",
            title: "Where Love Started",
            parah: "We met by chance at a coffee shop on a rainy afternoon. she was reading her favorite book, and I offered her the last available seat. What began as casual conversation quickly turned into hours of laughter neither of them expected",
        },
        {
            imgLeft: "/image/image12.png",
            imgRight: "/image/image13.png",
            title: "First Time We Met",
            parah: "We met by chance at a coffee shop on a rainy afternoon. she was reading her favorite book, and I offered her the last available seat. What began as casual conversation quickly turned into hours of laughter neither of them expected",
        },
        {
            imgLeft: "/image/image15.png",
            imgRight: "/image/image14.png",
            title: "She Said Yes",
            parah: "We met by chance at a coffee shop on a rainy afternoon. she was reading her favorite book, and I offered her the last available seat. What began as casual conversation quickly turned into hours of laughter neither of them expected",
        },
    ]
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
    const growns = [
        {
            img: "/image/gown01.png",
            title: "Vannessa",
            anchar: "WEDDING GOWN",
        },
        {
            img: "/image/gown02.png",
            title: "Selena",
            anchar: "WEDDING GOWN",
        },
        {
            img: "/image/gown03.png",
            title: "Jennifer",
            anchar: "WEDDING GOWN",
        },
    ];
    const inputs = [
        {
            type: "text",
            placeholder: "Name",
            group: 1,
        },
        {
            type: "text",
            placeholder: "Email",
            group: 2,
        },
        {
            type: "text",
            placeholder: "Phone",
            group: 2,

        },
        {
            type: "text",
            placeholder: "Wedding Date",
            group: 4,
        },
        {
            type: "text",
            placeholder: "Your Message",
            rows: 5,
            group: 5,
        },
    ]
    return (
        <div>
            {/* section 01 start */}
            <div className="section_01">
                <div className='container'>
                    <div className='section01_wr'>
                        <div className='section1_wr_left'>
                            <p>Welcome too Sienna</p>
                            <h1>Crafting Timeless Wedding Stories.</h1>
                        </div>
                        <div className='section01_wr_right'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <div className='section01_wr_right_anch'>
                                <a className=' anchar01' href='#'>DISCOVER MORE</a>
                                <a href='#' className='anchar02'  >BOOK NOW</a>
                            </div>
                        </div>
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
                                alt="image"
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
            {/* section 04 start */}
            <div className='section_04'>
                <div className='container'>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        speed={1200}
                        effect="slide"
                        slidesPerView={1}
                        spaceBetween={0}
                    >
                        {storyData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="section_04_grid">
                                    <div className="section_04_grid_items_left">
                                        <div className="section_04_grid_items_left_img">
                                            <Image
                                                src={item.imgLeft}
                                                alt={item.title}
                                                width={300}
                                                height={380}
                                            />
                                        </div>
                                        <div className="section_04_grid_items_left_content">
                                            <h2 className="main_heading">{item.title}</h2>
                                            <p className="parah">{item.parah}</p>
                                        </div>
                                    </div>
                                    <div className="section_04_grid_items_right">
                                        <div className="section_04_grid_items_right_img">
                                            <Image
                                                src={item.imgRight}
                                                alt={item.title}
                                                width={600}
                                                height={670}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
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
                            <div className='section_03_grid_items' key={index}>
                                <div className='section_03_grid_itms_img'>
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
            {/* section 05 start */}
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
            {/* section 06 start */}
            <div className="section_06">
                <video
                    src="/video/videoo04.mp4"
                    controls
                    width="100%"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="section_06_wrap"></div>
                <div className="section_06_wr">
                    <div className='secttion_02_wr_01 flex'>
                        <h2></h2>
                        <p>GET STARTED</p>
                    </div>
                    <h2 className="main_heading">From planning to perfection, we’re here to make it seamless.</h2>
                    <p className="parah">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <a href="#" className="btn_main">LEARN MORE</a>
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
            {/* section section 10 start */}
            <div className="section_10">
                <div className="container">
                    <div className="section_wr_10">
                        <div className="section_wr_left_10">
                            <h2 className="main_heading">Wedding Gowns</h2>
                            <p className="parah">Going shopping for your wedding gown can be as intimidating as it is exciting. After all, you are spending way more than you normally would on a dress.</p>
                        </div>
                        <div className="section_wr_right_10">
                            <a href="#" className="btn_main">Learn More</a>
                        </div>
                    </div>
                    <div className="section_grid_10">
                        {growns.map((item, index) => (
                            <div className="section_grid_10_items" key={index}>
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={360}
                                    height={560}
                                />
                                <div className="section_10_box">
                                    <h3>{item.title}</h3>
                                    <a href="#">{item.anchar}</a>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            {/* section section 09 start */}
            <div className="section_09">
                <div className="container">
                    <div className="section_09_grid">
                        <Image
                            src="/image/image40.png"
                            alt="image"
                            width={1300}
                            height={560}
                        />
                        <div className="section_09_wrpaer"></div>
                        <div className="section_09_wrps">
                            <div className='secttion_02_wr_01 sec_09'>
                                <h2></h2>
                                <p>CONTACT US</p>
                            </div>
                            <h2 className="main_heading">GET IN TOUCH</h2>
                            <p className="parah">If you would like to say hello or ask a general question, please send an email to avala@boldthemes.com</p>
                        </div>
                        <div className="secttion_09_wrp">
                            <form>
                                {inputs.map((item, index) => (
                                    <div className="secttion_09_wrp_input01" key={index}>
                                        {item.type === "textarea" ? (
                                            <textarea placeholder={item.placeholder} rows={item.rows}></textarea>
                                        ) : (
                                            <input type={item.type} placeholder={item.placeholder} />
                                        )}
                                        {item.group === 2 && index === 1 && (
                                            <input type="text" placeholder="Phone" />
                                        )}
                                    </div>
                                ))}
                                <div className="secttion_09_wrp_btn">
                                    <a href="#">Send</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page
