"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function PortfolioSection() {
  const [skills, setSkills] = useState(true)
  const skillsClick = () => {
    setSkills(true)
  }

  const portfolioClick = () => {
    setSkills(false)
  }

  return (
    <div className="sm:w-10/12 mx-auto sm:ml-16">
      <div className="h-[110px]  bg-orange-600/50 mt-7 flex justify-evenly items-center sm:pr-28 rounded-t-lg">
        <motion.button
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.85, rotate: 2}}
        onClick={skillsClick}
        className="underline font-semibold text-xl cursor-pointer text-[30px]">My Skills</motion.button>
        <motion.button 
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.85, rotate: 2}} 
        onClick={portfolioClick}
        className="underline font-semibold text-xl cursor-pointer text-[30px]">My Portfolio</motion.button>
      </div>
      <div className="h-[1000px] off-white-grade p-5 pt-6 rounded-b-lg relative">
        <AnimatePresence>
          {skills ?
            <motion.div
            initial={{ x: -400, opacity: 0  }}
            animate={{x: 0, opacity: 100}}
            exit={{ x: 1000, opacity: 0 }}
            transition={{ease: "easeInOut", duration: 0.28}}
            className="absolute top-6 left-6"
            >skills</motion.div>
            : '' }
        </AnimatePresence>
        <AnimatePresence>
          {!skills ?
            <motion.div
            initial={{ x: -400, opacity: 0  }}
            animate={{x: 0, opacity: 100}}
            exit={{ x: 1000, opacity: 0 }}
            transition={{ease: "easeInOut", duration: 0.28}}
            className="absolute top-6 left-6"
            >portfolio</motion.div>
            : '' }
        </AnimatePresence>
      </div>
    </div>
  )
}
