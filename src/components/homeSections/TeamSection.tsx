import Link from "next/link"
import Image from "next/image"
import { FaArrowRightLong } from "react-icons/fa6";
import teamImg from '../../public/images/GettyImages-1437209359.webp'

export default function TeamSection() {
    return(
        <div className="flex items-center justify-between w-full team-sec-container">
            <div className="team-sec-content">
                <h2 className="team-behind">
                THE TEAM BEHIND
                </h2>
                <h2 className="team-sec-head">Team of over 450<br /> experts</h2>
                <p className="team-sec-para">At ACM, we’re focused on building strong and lasting client partnerships. By drawing on our deep industry knowledge and expertise, we provide the insights you need to build and evolve your brand, drive business performance and mitigate risk.</p>
                <Link href="/contact-us" className="link-width"><button className="flex justify-center gap-3 items-center lets-connect-button" type="button">Let&apos;s connect <FaArrowRightLong /></button> </Link>
            </div>
            <div className="team-sec-image-container flex justify-end">
                <Image className="team-sec-image" width={400} height={300} alt="team-img" src="https://numerique.vamtam.com/wp-content/uploads/2023/05/GettyImages-1436826358.jpg" />
                <Image className="team-sec-image small-img" width={500} height={500} alt="team-img" src={teamImg} />

            </div>
        </div>
    )
}