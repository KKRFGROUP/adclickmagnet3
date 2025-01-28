import Link from "next/link"
import Image from "next/image"
import { FaArrowRightLong } from "react-icons/fa6";
//import teamImg from '../../public/images/GettyImages-1437209359.webp'

export default function TeamSection() {
    return(
        <div className="flex items-center justify-between w-full team-sec-container">
            <div className="team-sec-content">
                <h2 className="team-behind">
                THE TEAM BEHIND
                </h2>
                <h2 className="team-sec-head">Team of over 450<br /> experts</h2>
                <p className="team-sec-para">With a team of over 450 experts, ACM is dedicated to fostering strong and lasting client partnerships. Leveraging deep industry expertise, we deliver valuable insights to help you elevate your brand, enhance business performance, and effectively manage risks.</p>
                <Link href="/contact-us" className="link-width"><button className="flex justify-center gap-3 items-center lets-connect-button" type="button">Let&apos;s connect <FaArrowRightLong /></button> </Link>
            </div>
            <div className="team-sec-image-container flex justify-end">
                <Image className="team-sec-image" width={400} height={300} alt="team-img" src="/images/home team/team sec 01.webp" />
                <Image className="team-sec-image small-img" width={500} height={500} alt="team-img" src="/images/home team/team sec 02.webp" />

            </div>
        </div>
    )
}