"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[58rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <div className="relative flex align-center justify-end h-full m-auto max-w-5xl pt-[35px]">
            <div className="absolute left-0 z-10 flex flex-col justify-center h-full">
              <h1 className="text-[3rem] leading-[1] line font-extrabold text-red-500 xxs:text-[3.4rem] xs:text-[4.5rem] sm:text-[5.5rem] md:text-[7rem] text-left pl-2">Hello, <br/> I’m <span className="underline">Christian<br/>Gouldy</span></h1>
            </div>
            <div className="ml-32 mr-2 sm:ml-48">
              <Image
              className="rounded-xl min-w-30"
              quality={95}
              src="/images/heroimage.jpg"
              alt="Hero Image"
              width={536}
              height={830}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.h1
        className="mb-10 mt-14 px-4 text-2xl !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        I'm a{" "}
        <span className="font-bold">Full-Stack Developer</span> with a year of hands-on experience, and I'm passionate about bringing digital visions to life.
        <br/>
        <span className="underline">JavaScript, TypeScript, React & Python</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-2 py-3 mx-1 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-10"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
        </Link>

        <a
          className="flex items-center gap-2 py-3 mx-1 transition bg-white rounded-full outline-none cursor-pointer group px-7 focus:scale-110 hover:scale-110 active:scale-105 borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="transition opacity-60 group-hover:translate-y-1" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 mx-1"
          href="https://www.linkedin.com/in/gouldy-c"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 mx-1"
          href="https://www.github.com/Gouldy-C"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
