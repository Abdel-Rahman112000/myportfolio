"use client";
import { motion } from "framer-motion";
import Transition from "/src/app/Transtion/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Bg3d from "../bg-3d/page";
export default function HeroSection() {
  return (
    <section className=" overflow-auto w-full h-screen bg-banner-bg bg-no-repeat bg-center bg-cover">
      <Transition />
      <div className=" w-[80%] relative  mx-auto mt-24 py-4 px-8 grid grid-cols-2 sm:grid-cols-12">
        <div className=" col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <motion.h1
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="text-white my-8 sm:my:0 sm:text-4xl lg:text-5xl text-4xl lg:leading-normal  font-bold"
          >
            Hello, I`m
            <br />
            <motion.span
              initial={{ y: 500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 1.5 }}
              className="text-cyan-600 sm:text-4xl lg:text-5xl mt-4 mb-0 inline-block"
            >
              Abdel-Rahman Fathy
            </motion.span>
          </motion.h1>
          <motion.h2
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 3, duration: 1.5 }}
            className="text-white sm:text-4xl lg:text-4xl lg:leading-normal text-4xl font-bold"
          >
            I`m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600  ">
              <br />
              <TypeAnimation
                sequence={["Front-end Developer", 1000, "React JS", 1000]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </span>
          </motion.h2>

          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 3, duration: 1.5 }}
            className="my-8 sm:my:0"
          >
            <Link href={"contact"}>
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500  text-white">
                Hire Me
              </button>
            </Link>
            <Link target="_blank" href={"/Abdel-Rahman-Fathy-(React).pdf"}>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 text-white mt-3 ">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2  ">
                  Download CV
                </span>
              </button>
            </Link>
            <div className="socials flex mt-3 gap-14 ml-5 justify-center sm:justify-start  ">
              <Link
                href={"https://github.com/Abdel-Rahman-Fathy"}
                target="_blank"
              >
                <i className="fa-brands fa-github text-white text-4xl hover:text-black mt-8"></i>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/abdel-rahman30/"}
                target="_blank"
              >
                <i className="fa-brands fa-linkedin text-white text-4xl hover:text-blue-600 mt-8"></i>
              </Link>
              <Link
                href={"https://www.facebook.com/abdelrahman.aboaitta"}
                target="_blank"
              >
                <i className="fa-brands fa-facebook text-white text-4xl hover:text-blue-600  mt-8"></i>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="col-span-4 place-self-center mt-4 lg:mt-0 hidden sm:block">
          <motion.div
            initial={{ y: 800 }}
            animate={{ y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="z-50 md:mt-0 mt-5 w-[250px] h-[250px] lg:w-[550px] lg:h-[550px] relative"
          >
            <Image
              className="animate-pulse absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              src="/assets/me.png"
              width={450}
              height={450}
              alt="Abdelrahman"
            />
          </motion.div>
        </div>
      </div>
      <Bg3d />
    </section>
  );
}
