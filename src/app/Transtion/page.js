'use client';
import { motion } from 'framer-motion'
import React from 'react'

const transitionVarients = {
    initial: {
        x: '100%',
        width: '100%'
    },
    animate: {
        x: '0%',
        width: '0%'
    },
    exit: {
        x: ['0%', '100%'],
        with: ['0%', '100%'],

    }
}

export default function page() {
    return (
        <>
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#062537]'
                variants={transitionVarients}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ delay: .3, duration: 1, ease: 'easeInOut' }}
            >
            </motion.div>

        </>
    )
}
