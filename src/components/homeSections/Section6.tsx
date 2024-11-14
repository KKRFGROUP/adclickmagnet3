"use client";
import React from "react";
import { HeroParallax } from "../ui/HeroParallax";

export default function Section6() {
  return (
    <div className="sec6-container">

    <HeroParallax products={products} />;
    </div>
  )
}

export const products = [
  {
    title: "card 1",
    link: "/",
    thumbnail:
      "https://www.webfx.com/wp-content/uploads/2023/12/MROIDashboardFX.png",
      head: "Channet-Specific ROI Dashboard",
      para: "Make Smareter marketing decisions and miximize  your return with full transparency into omnichannel performance"
  },
  {
    title: "card 2",
    link: "/",
    thumbnail:
      "https://www.webfx.com/wp-content/uploads/2023/12/TeamworkFX.png",
      head: "Complete Project Transparency",
      para: "Project management built in for seamless collaboration and project transparency."
  },
  {
    title: "card 3",
    link: "/",
    thumbnail:
      "https://www.webfx.com/wp-content/uploads/2023/12/CompetitorSpyFX.png",
      head: "Ongoing Competitor Monitoring",
      para: "Stay up to date on competitors to get and stay ahead."
  },

  {
    title: "card 4",
    link: "/",
    thumbnail:
      "https://www.webfx.com/wp-content/uploads/2023/12/ContentAnalyticsFX.png",
      head: "Content Planning & Analytics",
      para: "Seamless content research, planning, and tracking capabilities"
  },

  

  {
    title: "card 5",
    link: "/",
    thumbnail:
      "https://www.webfx.com/wp-content/uploads/2023/12/MROIDashboardFX.png",
      head: "Channet-Specific ROI Dashboard",
      para: "Make Smareter marketing decisions and miximize  your return with full transparency into omnichannel performance"
  },
  {
    title: "card 6",
    link: "/",
    thumbnail:
      "https://www.webfx.com/wp-content/uploads/2023/12/TeamworkFX.png",
      head: "Complete Project Transparency",
      para: "Project management built in for seamless collaboration and project transparency."
  },
  {
    title: "card 7",
    link: "/",
    thumbnail:
      "https://www.webfx.com/wp-content/uploads/2023/12/CompetitorSpyFX.png",
      head: "Ongoing Competitor Monitoring",
      para: "Stay up to date on competitors to get and stay ahead."
  },

  {
    title: "card 8",
    link: "/",
    thumbnail:
      "https://www.webfx.com/wp-content/uploads/2023/12/ContentAnalyticsFX.png",
      head: "Content Planning & Analytics",
      para: "Seamless content research, planning, and tracking capabilities"
  }
];
