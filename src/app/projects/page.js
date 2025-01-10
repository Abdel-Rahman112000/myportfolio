"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "../ProjectCard/ProjectCard";
import Transition from "/src/app/Transtion/page";

const ProjectsData = [
  {
    id: 1,
    title: "Egyptos-Travel",
    image: "/assets/Projects/Egyptos.png",
    gitURL: "https://github.com/Abdel-Rahman112000/Tourist-Site",
    prevURL: "https://egyptos-travel.com/en",
  },
  {
    id: 2,
    title: "React movies website",
    descriptopn:
      "Project Movies is a comprehensive web application developed using React.js",
    image:
      "/assets/Projects/screencapture-movies-react-two-vercel-app-2023-09-03-15_18_33.png",
    gitURL: "https://github.com/Abdel-Rahman112000/Movies-React",
    prevURL: "https://movies-react-two.vercel.app/",
  },

  {
    id: 4,
    title: "Smart Login",
    image: "/assets/Projects/smartLogin.png",
    gitURL: "https://github.com/Abdel-Rahman-Fathy/Login-Smart",
    prevURL: "https://abdel-rahman-fathy.github.io/Login-Smart/",
  },
  {
    id: 7,
    title: "Landing-Page (Travel)",
    image: "/assets/Projects/res.png",
    gitURL: "https://github.com/Abdel-Rahman-Fathy/Restaurant-Landing-Page",
    prevURL: "https://abdel-rahman-fathy.github.io/Restaurant-Landing-Page/",
  },
  {
    id: 8,
    title: "Landing-Page (Travel)",
    image: "/assets/Projects/landing.png",
    gitURL: "https://github.com/Abdel-Rahman-Fathy/Travel-Landing-Page",
    prevURL: "https://abdel-rahman-fathy.github.io/Travel-Landing-Page/",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });
  const cardVarints = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section className="bg-banner-bg bg-no-repeat bg-center bg-cover py-24">
      <Transition />
      <div className="w-[80%] mx-auto">
        <h2 className=" sm:text-4xl text-2xl my-10 text-center font-semibold text-primary-600">
          My Projects
        </h2>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {ProjectsData.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVarints}
              initial="initial"
              animate={isView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.6 }}
            >
              <ProjectCard
                imgUrl={project.image}
                getURL={project.gitURL}
                prevURL={project.prevURL}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
