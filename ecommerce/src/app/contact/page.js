"use client";
import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const page = () => {
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
            <div className="pages_name">
                <div className="container">
                    <div className="pages_name_wrap">
                        <h1>CONTACT US</h1>
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
                    <div className="contact_maps">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56253.72572355872!2d76.00134641192903!3d22.960805561933217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396317850c371de7%3A0x22947c209f24505!2sDewas%2C%20Madhya%20Pradesh%20455001!5e1!3m2!1sen!2sin!4v1763714324124!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
