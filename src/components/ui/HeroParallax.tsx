"use client";
import React from "react";
import { useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export const HeroParallax = ({
  
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
    head: string;
    para: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  useEffect(() => {
    const t1 = gsap.timeline({
        scrollTrigger:{
            trigger: ".text-anime-cont",
            start: "30% 50%",
            end: "100% 50%",
            scrub: 1
        },
        
    })
    t1.to(".text-area-hover", {
        width: "100%"
    })
})

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className=" h-[380vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=" "
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              head={product.head}
              para={product.para}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
              head={product.head}
              para={product.para}

            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              head={product.head}
              para={product.para}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="text-anime-cont max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h2 className="data-driven-head text-2xl md:text-7xl font-bold dark:text-white">
      Data-driven, customer-<br />centric digital services
      </h2>
      <h2 className="text-2xl md:text-7xl font-bold dark:text-white">
      </h2>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
      Forget expensive tech that take months to implement. From marketing automation software to customer relationship management, our USA digital marketing company provides the martech businesses need to:
      </p>
      <ul className="sec6-content-list max-w-2xl text-base pl-4 md:text-xl mt-8 dark:text-neutral-200">
        <li>Track ROI (for offline and online channels)</li> <br />
        <li>Make strategic decisions about budget allocations</li><br />
        <li>Reduce software and technology costs</li>
      </ul>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
    head: string;
    para: string;
  };
  translate: MotionValue<number>;
  head: string;
  para: string;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <div className="sec6-card flex h-full w-full text-black bg-white">
            <Image
            src={product.thumbnail}
            height="200"
            width="200"
            className="object-cover w-full object-left-top absolute  inset-0"
            alt={product.title}
            />
            <div className="sec6-card-content">
                <h2 className="sec6-card-head text-center" >{product.head}</h2>
                <p className="sec6-card-para">{product.para}</p>
                <ul className="sec6-content-list">
                    <li className="sec6-content-list-item">Automatically calculate cost per lead per marketing channel</li>    
                    
                    <li>Easily compare channel performance to make better investment decisions</li>    
                    
                    <li>Forecast results and model ROI scenarios</li>    
                </ul>            
            </div>
        </div>
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0  bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
