"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section1 from './contact-sections/Section1';
import { TiLocation } from "react-icons/ti";
import Link from "next/link";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { BiSolidMessage } from "react-icons/bi";
import { ImPhone } from "react-icons/im";
import GoogleMapComponent from '../../components/ui/Map';
import { FaStarOfLife } from "react-icons/fa";

//ui animation
import { TracingBeam } from "../../components/ui/TracingBeam";


export default function ContactUs() {
    return (
        <TracingBeam>
        <div className="contact-us-page-main-container">
            <Navbar />
            <Section1 />

           
            <div className="contact-sec2-container flex justify-between items-center">
                <div className="contact-sec2-card">
                    <TiLocation className="contact-sec2-card-logo"/>
                    <h2 className="contact-sec2-card-head">Headquarters</h2>
                    <p className="contact-sec2-card-para">27 Division St, New York,<br />NY 10002, USA</p>
                    <Link href="https://maps.google.com/">
                        <div className="flex items-center gap-3 contact-sec2-card-link">
                            <p>GET DIRECTION</p>
                            <HiMiniArrowTopRightOnSquare className="get-direction-logo"/>
                        </div>
                        <hr className="contact-sec2-card-line"/>
                    </Link>
                </div>

                <div className="contact-sec2-card">
                    <BiSolidMessage className="contact-sec2-card-logo"/>
                    <h2 className="contact-sec2-card-head">Email Address</h2>
                    <p className="contact-sec2-card-para">frisk.agency@mail.com<br />frisk.agency@mail.com</p>
                    <Link href="https://maps.google.com/">
                        <div className="flex items-center gap-3 contact-sec2-card-link">
                            <p>GET DIRECTION</p>
                            <HiMiniArrowTopRightOnSquare className="get-direction-logo"/>
                        </div>
                        <hr className="contact-sec2-card-line"/>
                    </Link>
                </div>

                <div className="contact-sec2-card">
                    <ImPhone className="contact-sec2-card-logo"/>
                    <h2 className="contact-sec2-card-head">Phone Number</h2>
                    <p className="contact-sec2-card-para">+1 800 123 654 987<br />+1 800 223 984 002</p>
                    <Link href="https://maps.google.com/">
                        <div className="flex items-center gap-3 contact-sec2-card-link">
                            <p>GET DIRECTION</p>
                            <HiMiniArrowTopRightOnSquare className="get-direction-logo"/>
                        </div>
                        <hr className="contact-sec2-card-line"/>
                    </Link>
                </div>

            </div>

            <div className="contact-sec3-container flex justify-between">
                <div className="map-container">
                    <GoogleMapComponent />
                </div>

                <div className="contact-sec3-content">
                    <h2 className="contact-sec3-content-head">Have Any Project<br /> on Your Mind?</h2>
                    <p className="contact-sec3-content-para" >Great! We&apos;re excited to hear from you and let&apos;s start something</p>
                    <form onSubmit={() => {}} className="contact-form">
                        <div className="form-name-email flex items-center justify-between">
                            <div className="input-div">
                                <input className="contact-form-input" placeholder="Full Name*" type="text" />
                                <hr  className="input-line"/>
                            </div>
                            <div className="input-div">
                                <input className="contact-form-input" placeholder="Email Address*" type="text" />
                                <hr  className="input-line"/>
                            </div>

                        </div>
                        <div className="w-full">
                                <input className="contact-form-input" placeholder="Website Link" type="text" />
                                <hr  className="input-line"/>
                        </div>
                        <div className="w-full">
                            <textarea rows={3} cols={30} className="contact-form-input" placeholder="How can we help you"/>    
                            <hr  className="input-line"/>
                        </div>
                        <button type="submit" className="contact-form-button">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
            <div className="scrolling-text-container flex justify-center items-center">
                <div className="scrolling-text-inner"  role="marquee">
                    <div className="scrolling-text flex items-center">
                        <div className="scrolling-text-item">Your First Announcement</div>
                        <FaStarOfLife className="infinite-scroll-logo" />
                        <div className="scrolling-text-item">Your First Announcement</div>
                        <FaStarOfLife className="infinite-scroll-logo" />
                        <div className="scrolling-text-item">Your First Announcement</div>
                        <FaStarOfLife className="infinite-scroll-logo" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </TracingBeam>
    )
}