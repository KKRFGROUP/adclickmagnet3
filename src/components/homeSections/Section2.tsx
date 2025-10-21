

import Image from "next/image";


export default function Section2() {
    
    return (
      <>
      <div className="Companies-partner flex-col items-center">
        <h2 className="partner-not-ventor">A PARTNER, NOT<br /> A VENDOR</h2>
        <div className="flex justify-between items-center w-[80%] flex-wrap">

        <Image className="sec2-company-logo" src="/images/partner/meta business.webp" width={200} height={200} style={{ height: 'auto' }} alt="company logo"  />
        <Image className="sec2-company-logo" src="/images/partner/google cloud.webp" width={200} height={200} style={{ height: 'auto' }} alt="company logo"  />
        <Image className="sec2-company-logo" src="/images/partner/google partner.webp" width={200} height={200} style={{ height: 'auto' }} alt="company logo"  />
        <Image className="sec2-company-logo hidden lg:block" src="/images/partner/tiktok.webp" width={200} height={200} style={{ height: 'auto' }} alt="company logo"  />
        <Image className="sec2-company-logo" src="/images/partner/shopify.webp" width={200} height={200} style={{ height: 'auto' }} alt="company logo"  />
        </div>
      </div>  
        
      </>
    )
}

