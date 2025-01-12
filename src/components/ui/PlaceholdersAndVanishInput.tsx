// PlaceholdersAndVanishInput.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRouter } from "next/navigation";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface CanvasPoint {
  x: number;
  y: number;
  r: number;
  color: string;
}

export function PlaceholdersAndVanishInput({
  placeholders,
  onChange,
  onSubmit,
}: {
  placeholders: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState !== "visible" && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    } else if (document.visibilityState === "visible") {
      startAnimation();
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateWidth = () => setWindowWidth(window.innerWidth);
      updateWidth();
      window.addEventListener("resize", updateWidth);

      // Clean up the resize listener
      return () => window.removeEventListener("resize", updateWidth);
    }
  }, []);

  useEffect(() => {
    if (formRef.current && typeof window !== "undefined") {
      let startFrom;
      let endTo: string | undefined;
      if (windowWidth <= 575) {
        startFrom = "top 60%"
        endTo = "bottom 90%"
      } else if (windowWidth <= 768) {
        startFrom = "top 40%"
        endTo = "bottom 85%"
      } else if (windowWidth <= 1028) {
        startFrom = "top 30%"
      } else {
        startFrom = "top 0%"
        endTo = "bottom 80%"
      }
      

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".home-sec3-trigger",
            start: startFrom,
            end: endTo,
            scrub: 1,
          }
        });

        tl.fromTo(formRef.current, {
          scale: 0.5,
          opacity: 0,
          height: windowWidth <= 1028 ? "10vh" : "8vh",
        }, {
          scale: 1,
          opacity: 1,
          height: windowWidth <= 1028 ? "13vh" : "12vh",
          duration: 1,
          ease: "power2.out"
        });
      });

      return () => ctx.revert();
    }
  }, [windowWidth]);

  useEffect(() => {
    startAnimation();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [placeholders]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const newDataRef = useRef<CanvasPoint[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [animating, setAnimating] = useState(false);

  const draw = useCallback(() => {
    if (!inputRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, 800, 800);
    const computedStyles = getComputedStyle(inputRef.current);

    const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
    ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
    ctx.fillStyle = "#FFF";
    ctx.fillText(value, 16, 40);

    const imageData = ctx.getImageData(0, 0, 800, 800);
    const pixelData = imageData.data;
    const newData: CanvasPoint[] = [];

    for (let t = 0; t < 800; t++) {
      const i = 4 * t * 800;
      for (let n = 0; n < 800; n++) {
        const e = i + 4 * n;
        if (
          pixelData[e] !== 0 &&
          pixelData[e + 1] !== 0 &&
          pixelData[e + 2] !== 0
        ) {
          newData.push({
            x: n,
            y: t,
            r: 1,
            color: `rgba(${pixelData[e]}, ${pixelData[e + 1]}, ${pixelData[e + 2]}, ${pixelData[e + 3]})`,
          });
        }
      }
    }

    newDataRef.current = newData;
  }, [value]);

  useEffect(() => {
    draw();
  }, [value, draw]);

  const animate = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr: CanvasPoint[] = [];
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current: CanvasPoint = newDataRef.current[i];
          if (current.x < pos) {
            newArr.push(current);
          } else {
            if (current.r <= 0) {
              current.r = 0;
              continue;
            }
            current.x += Math.random() > 0.5 ? 1 : -1;
            current.y += Math.random() > 0.5 ? 1 : -1;
            current.r -= 0.05 * Math.random();
            newArr.push(current);
          }
        }
        newDataRef.current = newArr;
        const ctx = canvasRef.current?.getContext("2d", { willReadFrequently: true });
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800);
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color: color } = t;
            if (n > pos) {
              ctx.beginPath();
              ctx.rect(n, i, s, s);
              ctx.fillStyle = color;
              ctx.strokeStyle = color;
              ctx.stroke();
            }
          });
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8);
        } else {
          setValue("");
          setAnimating(false);
        }
      });
    };
    animateFrame(start);
  };

  const vanishAndSubmit = () => {
    setAnimating(true);
    draw();

    const value = inputRef.current?.value || "";
    if (value && inputRef.current) {
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0
      );
      animate(maxX);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onSubmit && onSubmit(e);
    vanishAndSubmit();
  };

  return (
    <form
      ref={formRef}
      className={cn(
        "flex justify-center relative bg-white dark:bg-white rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 mx-auto sm:mx-10 sm:w-[85%] placeholder",
        value && "bg-gray-50"
      )}
      onSubmit={handleSubmit}
    >
      <canvas
        className={cn(
          "absolute pointer-events-none text-base transform scale-50 top-[20%] left-2 sm:left-8 origin-top-left filter invert dark:invert-0 pr-20",
          !animating ? "opacity-0" : "opacity-100"
        )}
        ref={canvasRef}
      />
      <input
        onChange={(e) => {
          if (!animating) {
            setValue(e.target.value);
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            onChange && onChange(e);
          }
        }}
        ref={inputRef}
        value={value}
        type="text"
        className={cn(
          "w-full relative text-xl z-50 border-none dark:text-black bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20",
          animating && "text-black dark:text-black"
        )}
      />

      <button
        disabled={!value}
        type="submit"
        className="absolute right-2 top-1/2 z-50 -translate-y-1/2 h-12 w-[20%] md:w-[15%] rounded-full disabled:bg-gray-100 bg-black dark:bg-zinc-900 dark:disabled:bg-zinc-800 transition duration-200 flex items-center justify-center text-white dark:text-white"
      >
        Submit
      </button>

      <div className="absolute inset-0 flex items-center rounded-full pointer-events-none">
        <AnimatePresence mode="wait">
          {!value && (
            <motion.p
              initial={{
                y: 5,
                opacity: 0,
              }}
              key={`current-placeholder-${currentPlaceholder}`}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -15,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "linear",
              }}
              className="dark:text-zinc-500 text-sm sm:text-base font-normal text-neutral-500 pl-4 sm:pl-12 text-left w-[calc(100%-2rem)] truncate"
            >
              {placeholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

export function PlaceholdersAndVanishInputDemo() {
  const router = useRouter();
  const [value, setValue] = useState("");

  const placeholders = [
    "Share Your Website URL",
    "Start Analyze Your Site",
    "Lets Grow with ACM",
    "We Analyze your Website",
    "make a difference on your site",
    "Get a Report in a few Minutes",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  function getWebsiteName(url: string): string {
    try {
      const hostname = new URL(url).hostname;
      const name = hostname.split(".")[0];
      return name;
    } catch (error) {
      console.error("Invalid URL:", error);
      return "";
    }
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = getWebsiteName(value);
    router.push(`/seo-analyzer/analyze/${name}`);
  };

  return (
    <PlaceholdersAndVanishInput
      placeholders={placeholders}
      onChange={handleChange}
      onSubmit={onSubmit}
    />
  );
}