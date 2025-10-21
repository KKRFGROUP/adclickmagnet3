// Spotlight.tsx
import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
  style?: React.CSSProperties;
  position?: 'left' | 'right';
};

export const Spotlight = ({ 
  className, 
  fill, 
  style,
  position = 'left' 
}: SpotlightProps) => {
  // Matrix values for left and right positions
  const transform = position === 'left' 
    ? "matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"  // Original left-side transform
    : "matrix(0.822377 -0.568943 0.568943 0.822377 155.12 2291.09)";    // Mirrored for right-side

  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform={transform}
          fill={fill || "white"}
          fillOpacity="0.21"
        />
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          />
        </filter>
      </defs>
    </svg>
  );
};