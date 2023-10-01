import React from 'react'
import Link from 'next/link'
export default function NavLink({ title, path, selectTab, active }) {
    const LinkClass = active ? "text-primary-600 font-bold" : "text-[#ADB7BE] "
    return (
        <Link onClick={selectTab} href={path}
            className={`block py-2 pl-3 pr-4 sm:text-xl md:p-0 hover:text-primary-600 hover:font-bold  duration-[1s] ${LinkClass}`
            }
        >
            {title}
        </Link>



    )
}
