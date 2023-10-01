import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

export default function ProjectCard({ imgUrl, getURL, prevURL }) {

    return (
        <div >
            <div className='h-52 md:h-72   w-3/4 sm:w-full m-auto rounded-xl relative group hover:scale-105 transition-all duration-[.5s]  '
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center center" }}>
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 ">
                    <Link target='_blank' href={getURL} className='h-14 mr-2 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                        <CodeBracketIcon className='absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-[#ADB7BE]  cursor-pointer hover:text-white' />
                    </Link>
                    <Link target='_blank' href={prevURL} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                        <EyeIcon className='absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-[#ADB7BE]  cursor-pointer hover:text-white' />
                    </Link>
                </div>
            </div>
        </div>
    )
}
