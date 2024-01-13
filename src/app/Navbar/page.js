"use client";
import React, { startTransition, useState, useTransition } from "react";

import Link from "next/link";
import NavLink from "../NavLink/NavLink";
const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Contact",
    path: "contact",
  },
];
export default function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [tab, setTab] = useState("/");
  const [isPanding, StartTranstion] = useTransition();

  const [color, setColor] = useState(false);

  if (typeof window !== "undefined") {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", function () {
      changeColor();
    });
  }

  const handelTabNavbar = (nextTab) => {
    startTransition(() => {
      setTab(nextTab);
    });
  };
  return (
    <nav
      className={`${
        color ? "hidden" : "bg-transparent fixed"
      }  transition-all duration-[1s] border border-[#33353F] px-4 w-[80%]  left-[10%] top-6 rounded-lg  z-[1000]`}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto py-4">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold "
        >
          <span className="text-primary-600 ">A</span>B
          <span className="text-primary-600 ">D</span>O
        </Link>
        <div className="menu hidden  md:block md:w-auto">
          <ul className="flex justify-between p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  title={link.title}
                  path={link.path}
                  selectTab={() => handelTabNavbar(link.title)}
                  active={link.title == tab}
                />
              </li>
            ))}
          </ul>
        </div>

        {openNavbar && (
          <div className="menu w-full md:hidden block absolute top-[80%] left-0 z-[11111111] ">
            <ul className=" bg-[#1e2535] list-none flex flex-col gap-4 mt-4 py-2 rounded-2xl">
              {navLinks.map((link, index) => (
                <li
                  className="hover:tracking-widest hover:font-semibold transition-all duration-[.5s]"
                  onClick={() => setOpenNavbar(!openNavbar)}
                  key={index}
                >
                  <NavLink
                    title={link.title}
                    path={link.path}
                    selectTab={() => handelTabNavbar(link.title)}
                    active={link.title == tab}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="md:hidden block relative">
          {openNavbar ? (
            <button
              onClick={() => setOpenNavbar(!openNavbar)}
              className="z-[11111111] text-slate-200 flex items-center px-3 py-2 border rounded  border-slate-200 hover:text-white hover:border-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setOpenNavbar(!openNavbar)}
              className="z-[11111111] text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
