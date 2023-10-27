"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  }

  return (
    <>
      <div className={`nav-button fixed top-0 left-[50% - 720px] z-50 ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar w-3/4"></div>
        <div className="bar"></div>
      </div>
      <AnimatePresence>
        {menuOpen ?
          <motion.div className={`nav-menu off-white-grade p-[28px] z-40 fixed top-0 left-[50% - 720px] w-[300px] h-full flex flex-col ${menuOpen ? "active shadow-xl" : ""}`}
                initial={{ x: -400, opacity: 0  }}
                animate={{ x: 0, opacity: 100   }}
                exit={{ x: -400, opacity: 0 }}
                transition={{ease: "easeInOut", duration: 0.28}}>
              <motion.div className="pt-[40px] pb-5 h-full w-full"
                initial={{ x: -400, opacity: 0  }}
                animate={{ x: 0, opacity: 100   }}
                exit={{ x: -400, opacity: 0 }}
                transition={{ease: "easeInOut", duration: 0.32}}>
                
                <div className="flex flex-col justify-between h-full w-full my-5">
                  <div>
                    <a className="" href="#home" onClick={toggleMenu}>
                      <motion.h2 className="text-[30px] underline text-end"
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.85, rotate: 2}}>
                        Christian Gouldy</motion.h2>
                    </a>
                    <ul className="pt-4 text-end">
                      <motion.li 
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.85, rotate: 2}}>
                        <a 
                        className="" 
                        href="#about" 
                        onClick={toggleMenu}>
                        About Me</a>
                      </motion.li>
                      <li><motion.a href="#">
                        Item 2</motion.a></li>
                      <li><motion.a href="#">
                        Item 3</motion.a></li>
                    </ul>
                  </div>

                  <div className="w-full flex justify-evenly">
                    <motion.a className="cursor-pointer"
                      href="https://github.com/Gouldy-C"
                      target="_blank"
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.85, rotate: 2}}>
                        <img className="w-[52px] h-[52px]" src="/github-mark.png" alt="Github" />
                    </motion.a>
                    <motion.a className="cursor-pointer"
                      href="https://www.linkedin.com/in/gouldy-c"
                      target="_blank"
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.85, rotate: 2}}>
                        <img className="w-[58px] h-[50px]" src="/LI-In-Bug.png" alt="LinkedIn" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
          </motion.div>
          : ''
        }
      </AnimatePresence>
    </>
  )
}

export default Navbar