'use client';
import dynamic from 'next/dynamic';
import React from 'react'
const AnimatedNumbers = dynamic(() => { return import('react-animated-numbers') }, { ssr: false });
const archievmentsList = [
    {
        matric: "Projects",
        value: "15",
        postfix: "+"
    },
    {
        prefix: "~",
        matric: "Users",
        value: "100,000"
    },
    {
        matric: "Years",
        value: "1"
    },
]
export default function page() {
    return (
        <div className='py-8 px-4 xl:gap-16 w-[70%] mx-auto'>
            <div className=' md:border rounded-md py-8 sm:px-16 flex sm:flex-row  items-center md:justify-between justify-between'>
                {
                    archievmentsList.map((arch, index) =>
                        <div key={index} className='flex flex-col items-center justify-center   '>
                            <h2 className='text-white md:text-4xl text-3xl font-bold flex flex-row '>
                                {arch.prefix}
                                <AnimatedNumbers
                                    includeComma
                                    animateToNumber={parseInt(arch.value)}
                                    locale='en-US'
                                    className="text-white text-4xl font-bold  "
                                    configs={(_, index) => {
                                        return {
                                            mass: 1,

                                            friction: 100,
                                            tension: 140 * (index + 1),

                                        }
                                    }}
                                />
                                {arch.postfix}
                            </h2>
                            <p className='text-cyan-600  text-xl mt-3'>{arch.matric}</p>
                        </div>
                    )}
            </div>
        </div>
    )
}
