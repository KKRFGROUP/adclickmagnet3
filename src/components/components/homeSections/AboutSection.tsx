import Link from "next/link"

export default function AboutSection() {
    return (
        <div className="about-sec-container">
            <h2 className="about-sec-acm">About ACM</h2>
            <div className="flex justify-center about-sec-content">
                <h2 className="about-sec-head">We combine<br /> customer data with<br /> thoughtful work</h2>
                <div className="about-sec-right-cont">
                    <p className="about-sec-right-para">ACM is a tech-enabled digital marketing solutions provider, and we create custom strategies for each of our clients based on their needs and goals. As a result, we’ve driven over $3 billion in sales and over 7.8 million leads for our clients.</p>
                    <Link href="/about-us"><span className="more-about-card">

                        <span className="more-about">MORE ABOUT OUR UNIQUE APPROACH</span>
                        <hr className="more-about-underline"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="home-about-design-mobile">

            <div className=" flex mt-10 about-se-design-cont">
                <div className="flex items-center about-design">
                    <div className="design-circle"></div>
                    <hr className="dooted-line" />
                </div>
                <div className="about-design flex items-center">
                    <div className="design-circle"></div>
                    <hr className="dooted-line" />
                </div>
                <div className="about-design flex items-center">
                    <div className="design-circle"></div>
                    <hr className="dooted-line" />
                </div>
                <div className="about-design flex items-center">
                    <div className="design-circle"></div>
                    <hr className="dooted-line dooted-line-last" />
                </div>
            </div>

            <div className="flex mt-10 about-sec-below-design-content">
                <p className="about-sec-below-design-content-para">Our customers have raised<br /> over $350mn in Funding</p>
                <p className="about-sec-below-design-content-para">In over 2 years, we’ve never lost a customer</p>
                <p className="about-sec-below-design-content-para">We work with the world’s fastest<br /> growing startups</p>
                <p className="about-sec-below-design-content-para">Distributed team of over 20<br /> of the worlds best marketers,<br /> podcasters and copywriters</p>
            </div>
            </div>
        </div>
    )
}