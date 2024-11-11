import React from 'react'
import "./components.css";
import Image from 'next/image';
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";

const items = [
    {
      title: "Customer",
      title2: "INDUSTRY",
      description: "Marqeta",
      description2: "Financial Serv...",
      img: "https://cdn.sanity.io/images/k0dlbavy/production/f167fb70d9077c2e1a03fa0077056224bb6c8373-800x936.png?auto=format&fit=max&q=100&w=800",
    },
    {
        title: "Customer",
        title2: "INDUSTRY",
        description: "Amazon Phar...",
        description2: "Heathc...",
        img: "https://cdn.sanity.io/images/k0dlbavy/production/3d6e77a8fe7317759c78b9f9c89a07b863508d41-800x452.png?auto=format&fit=max&q=100&w=800",
    },
    {
        title: "Customer",
        title2: "INDUSTRY",
        description: "Go Henry",
        description2: "Financial Serv...",
        img: "https://cdn.sanity.io/images/k0dlbavy/production/88dc0c4e1aad720988dca3ffcf5cfac0d3ce4455-800x452.png?auto=format&fit=max&q=100&w=800",
    },
    {
        title: "Customer",
        title2: "INDUSTRY",
        description: "Reddit Business",
        description2: "Tech",
        img: "https://cdn.sanity.io/images/k0dlbavy/production/f03ebd9dcf2c9e72f7e4621e970eba354041bd72-800x936.png?auto=format&fit=max&q=100&w=800",
    },
    {
        title: "Customer",
        title2: "INDUSTRY",
        description: "Starve",
        description2: "Tech",
        img: "https://cdn.sanity.io/images/k0dlbavy/production/a74e5d93c29352eb25edd0264fb0a39bef989563-800x936.png?auto=format&fit=max&q=100&w=800",
    },
    {
        title: "Customer",
        title2: "INDUSTRY",
        description: "Opa!",
        description2: "Consumer Good..",
        img: "https://cdn.sanity.io/images/k0dlbavy/production/736472e7079951373aa33646f75d519428026466-1200x678.png?auto=format&fit=max&q=100&w=1200",
    },
    {
        title: "Customer",
        title2: "INDUSTRY",
        description: "Shopify",
        description2: "E-commerce & ...",
        img: "https://cdn.sanity.io/images/k0dlbavy/production/4f986ebd49b52907be569e401ef25b191b412700-800x936.png?auto=format&fit=max&q=100&w=800",
    },
    
  ];


function Section2({Cards}: {Cards: {id: number; imgUrl: string; customer: string; industry: string;}[]}) {
  return (
    <div className="services-sec2-main-component flex justify-center items-center">
        <div className="flex-col h-[100vh] w-[25%] p-0 m-0">
            <div className="services-sec2-card h-[65%]">
                <Image className='services-sec2-card-img h-[80%]' src={Cards[0].imgUrl} alt={Cards[0].customer} height={300} width={300} />
                <div className="flex justify-between services-sec2-card-content">
                    <div className='w-[50%]' >
                        <p className='services-sec2-card-content-key'>Customer</p>
                        <p className='services-sec2-card-content-value'>{Cards[0].customer}</p>
                    </div>
                    <div className='w-[50%]' >
                        <p className='services-sec2-card-content-key'>INDUSTRY</p>
                        <p className='services-sec2-card-content-value'>{Cards[0].industry}</p>
                    </div>
                </div>
            </div>
            <div className="services-sec2-card h-[35%]">
                <Image className='services-sec2-card-img h-[75%]' src={Cards[1].imgUrl} alt={Cards[1].customer} height={300} width={300} />
                <div className="flex justify-between services-sec2-card-content">
                <div className='w-[50%]' >
                        <p className='services-sec2-card-content-key'>Customer</p>
                        <p className='services-sec2-card-content-value'>{Cards[1].customer}</p>
                    </div>
                    <div className='w-[50%]' >
                        <p className='services-sec2-card-content-key'>INDUSTRY</p>
                        <p className='services-sec2-card-content-value'>{Cards[1].industry}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex-col h-[100vh] w-[25%] p-0 m-0">
            <div className="services-sec2-card h-[35%]">
                <Image className='services-sec2-card-img h-[75%]' src={Cards[2].imgUrl} alt={Cards[2].customer} height={300} width={300} />
                <div className="flex justify-between services-sec2-card-content">
                <div className='w-[50%]' >
                        <p className='services-sec2-card-content-key'>Customer</p>
                        <p className='services-sec2-card-content-value'>{Cards[2].customer}</p>
                    </div>
                    <div className='w-[50%]' >
                        <p className='services-sec2-card-content-key'>INDUSTRY</p>
                        <p className='services-sec2-card-content-value'>{Cards[2].industry}</p>
                    </div>
                </div>
            </div>
            <div className="services-sec2-card h-[65%]">
                <Image className='services-sec2-card-img h-[80%]' src={Cards[3].imgUrl} alt={Cards[3].customer} height={300} width={300} />
                <div className="flex justify-between services-sec2-card-content">
                    <div className='w-[50%]' >
                        <p className='services-sec2-card-content-key'>Customer</p>
                        <p className='services-sec2-card-content-value'>{Cards[3].customer}</p>
                    </div>
                    <div className='w-[50%]' >
                        <p className='services-sec2-card-content-key'>INDUSTRY</p>
                        <p className='services-sec2-card-content-value'>{Cards[3].industry}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex-col h-[100vh] w-[25%] p-0 m-0">
            <div className="services-sec2-card h-[65%]">
                <Image className='services-sec2-card-img h-[80%]' src={Cards[4].imgUrl} alt={Cards[4].customer} height={300} width={300} />
                <div className="flex justify-between services-sec2-card-content">
                    <div className='w-[50%]' >
                        <p className='services-sec2-card-content-key'>Customer</p>
                        <p className='services-sec2-card-content-value'>{Cards[4].customer}</p>
                    </div>
                    <div className='w-[50%]' >
                        <p className='services-sec2-card-content-key'>INDUSTRY</p>
                        <p className='services-sec2-card-content-value'>{Cards[4].industry}</p>
                    </div>
                </div>
            </div>
            <div className="services-sec2-card h-[35%]">
                    <Image className='services-sec2-card-img h-[75%]' src={Cards[5].imgUrl} alt={Cards[4].customer} height={300} width={300} />
                    <div className="flex justify-between services-sec2-card-content">
                    <div className='w-[50%]' >
                            <p className='services-sec2-card-content-key'>Customer</p>
                            <p className='services-sec2-card-content-value'>{Cards[5].customer}</p>
                        </div>
                        <div className='w-[50%]' >
                            <p className='services-sec2-card-content-key'>INDUSTRY</p>
                            <p className='services-sec2-card-content-value'>{Cards[5].industry}</p>
                        </div>
                    </div>
            </div>
        </div>

        
        <div className="flex-col h-[100vh] w-[25%] p-0 m-0">
            <div className="services-sec2-card h-[35%]">
                <Image className='services-sec2-card-img h-[75%]' src={Cards[6].imgUrl} alt={Cards[6].customer} height={300} width={300} />
                <div className="flex justify-between services-sec2-card-content">
                <div className='w-[50%]' >
                        <p className='services-sec2-card-content-key'>Customer</p>
                        <p className='services-sec2-card-content-value'>{Cards[6].customer}</p>
                    </div>
                    <div className='w-[50%]' >
                        <p className='services-sec2-card-content-key'>INDUSTRY</p>
                        <p className='services-sec2-card-content-value'>{Cards[6].industry}</p>
                    </div>
                </div>
            </div>
            <div className="services-sec2-card h-[65%]">
                <Image className='services-sec2-card-img h-[80%]' src={Cards[7].imgUrl} alt={Cards[7].customer} height={300} width={300} />
                <div className="flex justify-between services-sec2-card-content">
                    <div className='w-[50%]' >
                        <p className='services-sec2-card-content-key'>Customer</p>
                        <p className='services-sec2-card-content-value'>{Cards[7].customer}</p>
                    </div>
                    <div className='w-[50%]' >
                        <p className='services-sec2-card-content-key'>INDUSTRY</p>
                        <p className='services-sec2-card-content-value'>{Cards[7].industry}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2



