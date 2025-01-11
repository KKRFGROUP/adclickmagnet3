

import Image from "next/image";


export default function Section2() {
    
    return (
      <>
      <div className="Companies-partner flex-col items-center">
        <h2 className="partner-not-ventor">A PARTNER, NOT<br /> A VENDOR</h2>
        <div className="flex justify-between items-center w-[80%] flex-wrap">

        <Image className="sec2-company-logo" src="https://res.cloudinary.com/dgdgrniut/image/upload/v1736255739/meta-partner_pknbyj.webp" width={200} height={200} style={{ height: 'auto' }} alt="company logo"  />
        <Image className="sec2-company-logo" src="https://res.cloudinary.com/dgdgrniut/image/upload/v1736255739/google-cloud_wwum1k.webp" width={200} height={200} style={{ height: 'auto' }} alt="company logo"  />
        <Image className="sec2-company-logo" src="https://res.cloudinary.com/dgdgrniut/image/upload/v1736255739/google-partner_b106yz.webp" width={200} height={200} style={{ height: 'auto' }} alt="company logo"  />
        <Image className="sec2-company-logo hidden lg:block" src="https://res.cloudinary.com/dgdgrniut/image/upload/v1736256019/tiktok_ll8ixz.webp" width={200} height={200} style={{ height: 'auto' }} alt="company logo"  />
        <Image className="sec2-company-logo" src="https://res.cloudinary.com/dgdgrniut/image/upload/v1736255739/shopify_qdburu.webp" width={200} height={200} style={{ height: 'auto' }} alt="company logo"  />
        </div>
      </div>  
        
      </>
    )
}

