import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  buttonRef: React.RefObject<HTMLDivElement>;
}

interface MenuItemProps {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}

interface MenuProps {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const DropdownPortal: React.FC<PortalProps> = ({ children, buttonRef }) => {
  const [mounted, setMounted] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted || !buttonRef.current || !dropdownRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    dropdownRef.current.style.top = `${rect.bottom + 20}px`;
    dropdownRef.current.style.minWidth = `${rect.width * 1.5}px`;
  }, [mounted, buttonRef]);

  if (!mounted || !buttonRef.current) return null;

  return createPortal(
    <div 
      ref={dropdownRef}
      className="fixed left-1/2 -translate-x-1/2 z-[1000] w-auto"
    >
      {children}
    </div>,
    document.body
  );
};

export const MenuItem: React.FC<MenuItemProps> = ({
  setActive,
  active,
  item,
  children,
}) => {
  const buttonRef = React.useRef<HTMLDivElement>(null);
  const lastScrollTop = React.useRef(0);

  React.useEffect(() => {
    // Function to handle scroll with debounce and threshold
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      const scrollDelta = Math.abs(currentScroll - lastScrollTop.current);
      
      // Only close if scrolled more than 10 pixels
      if (scrollDelta > 10 && active === item) {
        // Clear any existing timeout
        if (scrollTimeout) clearTimeout(scrollTimeout);
        
        // Set a new timeout for 150ms delay
        scrollTimeout = setTimeout(() => {
          setActive("");
        }, 150);
      }
      
      lastScrollTop.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [active, item, setActive]);

  return (
    <div ref={buttonRef} onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-[0.9] lg:text-sm md:text-[10px] whitespace-nowrap"
      >
        {item}
      </motion.p>
      
      <AnimatePresence>
        {active === item && children && (
          <DropdownPortal buttonRef={buttonRef}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={transition}
              className="w-full"
            >
              <motion.div
                transition={transition}
                layoutId="active"
                className=" backdrop-blur-2xl rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="what-we-do-links">
                  {children}
                </motion.div>
              </motion.div>
            </motion.div>
          </DropdownPortal>
        )}
      </AnimatePresence>
    </div>
  );
};

const contactNumberApi = {
  contactNumber: "+1-718-577-2718"
}

export const Menu: React.FC<MenuProps> = ({
  setActive,
  children,
}) => {
  return (
    <div className="navbar relative rounded-full border border-transparent dark:bg-white/[0.4] dark:border-black bg-white shadow-input flex justify-between items-center space-x-4 px-8 py-2 md:py-3 md:px-3 mx-10">
      <Link href="/" className="navbar-logo">      
        <Image 
          className="navbar-company-logo" 
          width={300} 
          height={300} 
          src="https://res.cloudinary.com/dgdgrniut/image/upload/c_crop,w_900,h_200/v1734526527/adclick_magnet_black_logo-removebg-preview_sfbddu_c9us7e.png"
          alt="logo" 
        />
      </Link>

      <nav
        onMouseLeave={() => setActive(null)}
        className="relative inline-flex overflow-hidden rounded-full p-[2px] navlinks"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-10 md:px-7 py-3 md:py-4 space-x-[40px] w-[90%] hover:w-[100%]">
          {children}
        </span>
      </nav>

      <Link href={`tel:${contactNumberApi.contactNumber}`}>
        <button type="button" className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 getintouch-card">
        
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 lg:text-sm md:text-[10px] font-medium text-white backdrop-blur-3xl">
           {contactNumberApi.contactNumber}

            <svg 
            width="25" 
            height="25" 
            fill="currentColor"
            className="bi bi-arrow-right-short" 
            viewBox="0 0 16 16"
            >
              <path 
                fillRule="evenodd" 
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </span>
          
          
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


export default Menu;