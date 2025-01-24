
import React from "react"

import { HeroParallax } from "../ui/HeroParallax"


const products = [
  {
    title: "card 1",
    link: "/",
    thumbnail:
      "https://www.webfx.com/wp-content/uploads/2023/12/MROIDashboardFX.png",
      head: "Channel-Specific ROI Dashboard",
      para: "Gain visibility and optimize your omnichannel marketing ROI effectively.",
      point: [
        {
          id: 1,
          text: "Calculate cost per lead quickly."
        },
        {
          id: 2,
          text: "Compare channel performance easily."
        },
        {
          id: 3,
          text: "Forecast and model ROI better."
        }
      ]
  },
  {
    title: "card 2",
    link: "/",
    thumbnail:
      "https://www.webfx.com/wp-content/uploads/2023/12/TeamworkFX.png",
      head: "Targeted Audience Segmentation",
      para: "Segment your audience and boost engagement with personalized campaigns.",
      point: [
        {
          id: 1,
          text: "Create audience groups effectively."
        },
        {
          id: 2,
          text: "Improve engagement with tailored content."
        },
        {
          id: 3,
          text: "Use predictive analytics for insights."
        }
      ]
  },
  {
    title: "card 3",
    link: "/",
    thumbnail:
      "https://www.webfx.com/wp-content/uploads/2023/12/CompetitorSpyFX.png",
      head: "Comprehensive Analytics & Reporting",
      para: "Track and optimize your campaigns with actionable analytics and insights.",
      point: [
        {
          id: 1,
          text: "Track campaign performance across channels."
        },
        {
          id: 2,
          text: "Customize reports to highlight metrics."
        },
        {
          id: 3,
          text: "Optimize strategies with insights."
        }
      ]
  },
  {
    title: "card 4",
    link: "/",
    thumbnail:
      "https://www.webfx.com/wp-content/uploads/2023/12/ContentAnalyticsFX.png",
      head: "Conversion Rate Optimization (CRO)",
      para: "Maximize your conversions by optimizing websites and marketing channels.",
      point: [
        {
          id: 1,
          text: "A/B test landing pages effectively."
        },
        {
          id: 2,
          text: "Optimize user journeys for conversions."
        },
        {
          id: 3,
          text: "Leverage heatmaps for better insights."
        }
      ]
  },
  {
    title: "card 5",
    link: "/",
    thumbnail:
      "https://www.webfx.com/wp-content/uploads/2023/12/MROIDashboardFX.png",
      head: "Multichannel Marketing Integration",
      para: "Create seamless, consistent brand experiences across digital touchpoints.",
      point: [
        {
          id: 1,
          text: "Coordinate messaging across platforms."
        },
        {
          id: 2,
          text: "Ensure consistent brand experience."
        },
        {
          id: 3,
          text: "Use cross-channel data insights."
        }
      ]
  },
  {
    title: "card 6",
    link: "/",
    thumbnail:
      "https://www.webfx.com/wp-content/uploads/2023/12/TeamworkFX.png",
      head: "Social Media & Influencer Marketing",
      para: "Expand brand reach and credibility with tailored strategies and influencers.",
      point: [
        {
          id: 1,
          text: "Create consistent engaging strategies."
        },
        {
          id: 2,
          text: "Build connections with your audience."
        },
        {
          id: 3,
          text: "Leverage influencer partnerships effectively."
        }
      ]
  },
  {
    title: "card 7",
    link: "/",
    thumbnail:
      "https://www.webfx.com/wp-content/uploads/2023/12/CompetitorSpyFX.png",
      head: "Email Marketing Automation",
      para: "Automate personalized emails to nurture leads and boost conversions.",
      point: [
        {
          id: 1,
          text: "Automate follow-ups based on actions."
        },
        {
          id: 2,
          text: "Segment email lists for targeting."
        },
        {
          id: 3,
          text: "Optimize emails for better results."
        }
      ]
  },
  {
    title: "card 8",
    link: "/",
    thumbnail:
      "https://www.webfx.com/wp-content/uploads/2023/12/ContentAnalyticsFX.png",
      head: "Search Engine Optimization (SEO)",
      para: "Improve visibility and attract organic traffic with optimized SEO strategies.",
      point: [
        {
          id: 1,
          text: "Implement on-page SEO effectively."
        },
        {
          id: 2,
          text: "Create high-quality optimized content."
        },
        {
          id: 3,
          text: "Optimize local search visibility."
        }
      ]
  }
]



export default function Section6() {
  return (
    <div className="sec6-container">

      <HeroParallax products={products} />
    </div>
  )
}


