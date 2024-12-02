
import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import adclickImage from '../../public/images/logo/adclickmagnetlogoblack.png';
import '../app.css';


const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white lg:text-sm md:text-[10px]"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && children && (
            <div className="absolute top-[calc(100%_+_1.2rem)] transform -translate-x-[45%] mx-10 pt-1">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-black  dark:bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="what-we-do-links"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {

  return (
    <div  className="navbar relative rounded-full border border-transparent dark:bg-white/[0.4] dark:border-black bg-white shadow-input flex justify-between items-center space-x-4 px-8 py-2 md:py-3 md:px-3 mx-10 ">
          <Link href="/" className="navbar-logo">      
            <Image className="navbar-company-logo" width={200} height={200} src={adclickImage} alt="logo"  />
          </Link>
        <nav
          onMouseLeave={() => setActive(null)} // resets the state
          className="relative rounded-full border border-transparent shadow-2xl shadow-black  dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-between items-center space-x-4 px-10 md:px-7 py-3 md:py-4 navlinks"
          >
        
          {children}
          
        </nav>
        <Link href="/contact-us">
        <button type="button" className="flex items-center justify-center py-2 md:py-3 px-5 getintouch-card">
                            Get in touch
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                            </svg>
        </button>
        </Link>
    </div>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-black font-semibold hover:text-black cursor-none"
    >
      {children}
    </Link>
  );
};
