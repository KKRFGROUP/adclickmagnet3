import Image from "next/image";
import { TypewriterEffect } from "../ui/TypewriterEffect";

const words = [
    {
        text: "The",
    },
    {
      text: "best",
    },
    {
        text: "brands",
    },
    {
      text: "choose",
    },
    {
      text: "ACM.",
      className: "text-black dark:text-black ",
      
    },
  ];

const bestBrand = [
  {
    name: "EBOWLA",
    img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734539819/EBOWLA_Black_LOGO-removebg-preview_wegwag.png"
  },
  {
    name: "Canada View",
    img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734539816/Canada_view_logo-removebg-preview_ejmaon.png"
  },
  {
    name: "Jen Thomson",
    img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734539813/Jen_thomson_Black_logo-removebg-preview_pbs3x1.png"
  },
  {
    name: "Sisli",
    img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734539810/Sisli_black_logo-removebg-preview_wgwkop.png"
  },
  {
    name: "PGroomer",
    img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734539808/PGroomer_logo-removebg-preview_tjbvmd.png"
  },
  {
    name: "Smokey",
    img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734539804/Smokey_black_logo-removebg-preview_lrgjta.png"
  },
  {
    name: "DonJon",
    img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734539719/Donjon_black_logo-removebg-preview_rzndtm.png"
  },
  {
    name: "IQ Home Care",
    img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734539725/IQ_HOME_CARE_LOGO__1_-removebg-preview_hinzq5.png"
  },
  {
    name: "Blends",
    img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734539718/Blinds_by_design_black_logo-removebg-preview_bm8h8p.png"
  },
  {
    name: "Dekalash",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609723/dekalash_wj2iqh.png"
  },
  {
    name: "HeartSaver-NY",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609723/heart_saver_logo_h3l3ry.png"
  },
  {
    name: "Wiseman Hoffs",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609723/wiseman_hoffs_logo_mrx1x5.png"
  },
  {
    name: "FSilveira",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609723/fsilveira_logo_vslrsq.png"
  },

  {
    name: "Spartans",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609723/spartans_tatto_su4wvf.png"
  },
  {
    name: "RockWood Kitchens",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609723/rockwood_kitchens_logo_zxhh7s.png"
  },
  {
    name: "Recover Ease",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609724/recover_ease_logo_a4ibsp.png"
  },
  {
    name: "Roof Today",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609724/roof_today_logo_jqdqx5.png"
  },
  {
    name: "Count Down Fitness",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609724/countdown_fitness_logo_vzimz8.png"
  },
  {
    name: "Tapis Rugs & Carpet",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609724/tapis_rugs_logo_lgesco.png"
  },
  {
    name: "Devilered 2 Choices",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609724/deliverd_2_choices_isl2zy.png"
  },
  {
    name: "BON TON",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609725/bonton_logo_ypq3ye.png"
  },
  {
    name: "Real Results Sales",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609725/real_results_sales_nhf9da.png"
  },
  {
    name: "Sakh Public School",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609725/sakh_public_school_logo_woylpv.png"
  },
  {
    name: "Barista",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609725/barista_abs6th.png"
  },
  {
    name: "Controller Chaos",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609725/contoller_chaos_logo_ccunu5.png"
  },
  {
    name: "BI Soni Clean",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609726/bi_soniclean_ga4q3g.png"
  },
  {
    name: "Privacon",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609726/privacon_logo_zm0e7r.png"
  },
  {
    name: "Lexington Podiatry",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609726/lexington_podiatry_logo_zdujuf.png"
  },
  {
    name: "Quick Check Tech",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609726/quick_check_tech_logo_zf2x0e.png"
  },
  {
    name: "Modern Podiatrist",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609727/modern_podiatrist_ku3bhj.png"
  },
  {
    name: "Decorento",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609727/decorento_logo_m24xtm.png"
  },
  {
    name: "Mystic Journeys",
    img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734609727/mystic_journeys_logo_oendwe.png"
  },

]


export default function Section7() {
    return (
        <div className="flex-col justify-center items-center w-full sec7-container">
            <TypewriterEffect className="data-driven-head"  words={words} />
            <div className="flex justify-between mt-10 sec7-logo-container">
              {bestBrand.map((each,index) => (
                <Image key={index} className="sec7-logo" width={170} height={140} style={{width: "auto", height: "auto"}} src={each.img} alt={each.name} />
              ))}
            </div>
        </div>
    );
}

