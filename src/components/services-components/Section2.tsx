import React from 'react'
import "./components.css";
import Image from 'next/image';



function Section2({Cards}: {Cards: {id: number; imgUrl: string; customer: string; industry: string;}[]}) {
  return (
    <div className=" services-sec2-main-component">
        <div className="flex-col  p-0 m-0 services-sec2-flex-card">
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
        <div className="flex-col h-[100vh] w-[25%] p-0 m-0 services-sec2-flex-card">
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

        <div className="flex-col h-[100vh] w-[25%] p-0 m-0 services-sec2-flex-card">
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

        
        <div className="flex-col h-[100vh] w-[25%] p-0 m-0 services-sec2-flex-card">
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



