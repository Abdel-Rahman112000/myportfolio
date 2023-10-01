'use client';
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import ProjectCard from '../ProjectCard/ProjectCard';
import Transition from '/src/app/Transtion/page'

const ProjectsData = [
    {
        id: 1,
        title: "React movies website",
        descriptopn: "Project Movies is a comprehensive web application developed using React.js",
        image: "/assets/Projects/screencapture-movies-react-two-vercel-app-2023-09-03-15_18_33.png",
        gitURL: "https://github.com/Abdel-Rahman-Fathy/Movies-React",
        prevURL: "https://movies-react-two.vercel.app/"
    },
    {
        id: 2,
        title: "La-Collection (E-commerce)",
        image: "/assets/Projects/4.png",
        gitURL: "https://github.com/Abdel-Rahman-Fathy/La-collection-e-commerce",
        prevURL: "https://la-collection-e-commerce.vercel.app/"
    }
    ,
    {
        id: 3,
        title: "FAR WAY",
        image: "/assets/Projects/FARWAY.png",
        gitURL: "https://github.com/Abdel-Rahman-Fathy/Far-Away-React.js",
        prevURL: "https://far-away-react-p0m6tiu0a-abdel-rahman-fathy.vercel.app/"
    }
    ,
    {
        id: 4,
        title: "Smart Login",
        image: "/assets/Projects/smartLogin.png",
        gitURL: "https://github.com/Abdel-Rahman-Fathy/Login-Smart",
        prevURL: "https://abdel-rahman-fathy.github.io/Login-Smart/"
    }
    ,
    {
        id: 5,
        title: "Book Mark",
        image: "/assets/Projects/bookmark.png",
        gitURL: "https://github.com/Abdel-Rahman-Fathy/Book-Mark",
        prevURL: "https://abdel-rahman-fathy.github.io/Book-Mark/"
    }
    ,
    {
        id: 6,
        title: "Landing-Page (Travel)",
        image: "/assets/Projects/landing.png",
        gitURL: "https://github.com/Abdel-Rahman-Fathy/Travel-Landing-Page",
        prevURL: "https://abdel-rahman-fathy.github.io/Travel-Landing-Page/"
    }
    ,
    {
        id: 7,
        title: "Landing-Page (Travel)",
        image: "/assets/Projects/res.png",
        gitURL: "https://github.com/Abdel-Rahman-Fathy/Restaurant-Landing-Page",
        prevURL: "https://abdel-rahman-fathy.github.io/Restaurant-Landing-Page/"
    }
]

export default function ProjectsSection() {
    const ref = useRef(null);
    const isView = useInView(ref, { once: true })
    const cardVarints = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    }
    return (
        <section className='bg-banner-bg bg-no-repeat bg-center bg-cover py-24'>
            <Transition />
            <div className='container mx-auto'>
                <h2 className=' text-4xl my-10 text-center font-semibold text-primary-600'>My Projects</h2>
                <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                    {
                        ProjectsData.map((project, index) =>
                            <motion.li key={index}
                                variants={cardVarints}
                                initial="initial"
                                animate={isView ? "animate" : "initial"}
                                transition={{ duration: .3, delay: index * .4 }}
                            >
                                <ProjectCard
                                    imgUrl={project.image}
                                    getURL={project.gitURL}
                                    prevURL={project.prevURL}
                                />
                            </motion.li>
                        )
                    }
                </ul>
            </div>
        </section>
    )
}
