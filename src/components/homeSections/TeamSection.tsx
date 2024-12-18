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
                <Image className="team-sec-image" width={400} height={300} alt="team-img" src="https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734531691/Unlocking_Inspiration__The_Power_of_Keynote_Speakers_in_Driving_Change__ahj6xc.jpg" />
                <Image className="team-sec-image small-img" width={500} height={500} alt="team-img" src="https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734531690/Choosing_the_Perfect_Keynote_Speaker_for_Your_Upcoming_Business_Event_tlgy38.jpg" />

            </div>
        </div>
    )
}