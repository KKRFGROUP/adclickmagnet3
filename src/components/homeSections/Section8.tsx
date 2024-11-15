
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";


export default function Section8() {
  return (
    <div className="sec8-container h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <TextGenerateEffect color={"inner-color-title"} className="relative top-50" words={"Our Client Review"}  />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "ACM transformed our online presence with a stunning website and effective SEO strategies. Their expertise boosted our traffic and conversions dramatically, taking our business to the next level!",
    name: "Ryan",
    title: "Elevate Homescriptions",
  },
  {
    quote:
      "Thanks to ACM's Google Ads campaigns, we reached our ideal audience and doubled our leads in no time. Their strategic approach and attention to detail truly set them apart in the digital space.",
    name: "Marcio",
    title: "IQ Homecare",
  },
  {
    quote:
      "ACM's graphic design team crafted visuals that perfectly represent our brand. Their creativity, dedication, and ability to capture our vision have been an absolute game-changer for us.",
    name: "Joe",
    title: "Anderson Glass Contractors",
  },
  {
    quote:
      "The team at ACM delivered a sleek, modern website that exceeded our expectations. Their professionalism and attention to detail ensured a seamless experience from start to finish.",
    name: "Afraz",
    title: "Heartsaver NY",
  },
  {
    quote:
      "Partnering with ACM was the best decision for our business. They handled web development, SEO, and ads with precision, providing outstanding results that far surpassed our expectations.",
    name: "Christina",
    title: "Tapis Rugs & Carpets",
  },
];




