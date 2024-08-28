"use client";
import React, { useRef, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import Transition from "/src/app/Transtion/page";
import Bg3d from "../bg-3d/page";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function EmailSection() {
  const messObj = {
    name: "",
    subject: "",
    email: "",
    message: "",
  };
  // function send message
  const notify = () => toast("Wow so easy!");
  const form = useRef();
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    if (messObj.email && messObj.message && messObj.name && messObj.subject) {
      emailjs
        .sendForm(
          "service_u922iy5",
          "template_nq9wc5l",
          form.current,
          "gcO5KV3QYUO9_prb3"
        )
        .then(
          (result) => {
            toast.success(
              "تم ارسال الرساله بنجاح",
              { delay: 1000 },
              {
                position: toast.POSITION.BOTTOM_RIGHT,
              }
            );
            setMessage();
            clearInputs(e);
          },
          (error) => {
            setMessage(error.text);
          }
        );
    } else {
      toast.error("من فضلك ادخل البيانات كامله");
    }
  };
  // Clear Inpute after Fill
  const clearInputs = (e) => {
    for (let i = 0; i < e.target.length - 1; i++) {
      e.target[i].value = "";
    }
  };
  return (
    <section className=" bg-banner-bg bg-no-repeat bg-center bg-cover px-3  min-h-screen flex items-center">
      <Bg3d opacity={"1"} />
      <Transition />
      <div className="w-[80%] mt-8 mx-auto grid md:grid-cols-2 py-24 gap-4 relative">
        <div className="z-10 justify-self-start">
          <h5 className="text-xl font-bold text-white my-2 ">
            Let's <span className="text-primary-600">Contact</span>{" "}
          </h5>
          <div className=" border-t-2 mt-10">
            <div className=" flex phone mt-8 items-center">
              <div className="w-10 h-10 rounded-full flex justify-center items-center text-white border-white border-2 hover:border-primary-600 hover:text-primary-600">
                <i className="fa-solid fa-phone-volume "></i>
              </div>
              <p className=" text-white ml-4 text-lg">01093340885</p>
            </div>
            <div className=" flex phone mt-5 items-center">
              <div className="w-10 h-10 rounded-full flex justify-center  items-center text-white border-white border-2 hover:border-primary-600 hover:text-primary-600 ">
                <i className="fa-solid fa-envelope "></i>
              </div>
              <p className=" text-white ml-4 text-lg">
                abdelrahman30688@gmail.com
              </p>
            </div>
            <div className=" flex phone mt-5 items-center">
              <div className="w-10 h-10 rounded-full flex justify-center items-center text-white border-white border-2 hover:border-primary-600 hover:text-primary-600 ">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <p className=" text-white ml-4 text-lg">6 October Egypt</p>
            </div>
          </div>
          <div className="socials flex mt-10 gap-14 justify-start  border-t-2 ">
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
              href={"https://www.linkedin.com/in/abdel-rahman30/"}
              target="_blank"
            >
              <i className="fa-brands fa-facebook text-white text-4xl hover:text-blue-600  mt-8"></i>
            </Link>
          </div>
        </div>
        <div>
          <form
            ref={form}
            className="flex flex-col mt-6 sm:m-0"
            onSubmit={sendEmail}
          >
            <div className="flex ">
              <div className="mb-6 w-1/2 mr-3">
                <label
                  htmlFor="name"
                  className="text-white block text-sm font-medium mb-2"
                >
                  Your name
                </label>
                <input
                  onChange={(e) => {
                    messObj.name = e.target.value;
                  }}
                  className="bg-transparent outline-none shadow-inner shadow-primary-100 border border-[#33353F] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                />
              </div>
              <div className="mb-6 w-1/2">
                <label
                  htmlFor="subject"
                  className="text-white block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  onChange={(e) => {
                    messObj.subject = e.target.value;
                  }}
                  className="bg-transparent outline-none shadow-inner shadow-primary-100 border border-[#33353F] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block text-sm font-medium mb-2"
              >
                Your email
              </label>
              <input
                onChange={(e) => {
                  messObj.email = e.target.value;
                }}
                className="bg-transparent outline-none shadow-inner shadow-primary-100 border border-[#33353F] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                rows={5}
                onChange={(e) => {
                  messObj.message = e.target.value;
                }}
                className="bg-transparent outline-none shadow-inner shadow-primary-100 border border-[#33353F] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about...."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 hover:tracking-widest sm:hover:w-1/3 transition-all duration-[.8s] text-white font-medium py-2.5 px-5 rounded-lg w-[80%] sm:w-[30%] "
            >
              Send Massage
            </button>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
