"use client";

//import Image from "next/image";
import React from "react";
//import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
//import { TypewriterEffect } from "../ui/typewriter-effect";
import Carousel from "../ui/Carousel";


export default function Section9() {


    return(
        <div className="sec9-container">
            
                <h2 className="about-sec-acm">Blogs</h2>
                <div className="flex justify-center about-sec-head-carousel">
                    <h2 className="blog-sec-head">Digital marketing & industry insights</h2>
                    <div className="carousel-container">
                        <Carousel />
                    </div>
                </div>
                <Link href="/blogs">
                    <p className="view-more" >View More</p>
                    <hr className="view-more-line"/>
                </Link>  
        </div>
    );
}

