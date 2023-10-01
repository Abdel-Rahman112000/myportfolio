'use client';
import React from 'react'
export default function TabButton({ selectTab, active, children }) {
    const buttonClass = active ? "text-cyan-600 border-primary-500 border-b-[3px] " : "text-[#ADB7BE] "
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-cyan-600 ${buttonClass}`}>
                {children}
            </p>
        </button>
    )
}
