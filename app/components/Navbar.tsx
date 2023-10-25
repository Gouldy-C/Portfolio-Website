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
          <motion.div className={`nav-menu z-40 z- fixed top-0 left-[50% - 720px] w-[300px] h-full flex flex-col ${menuOpen ? "active shadow-xl" : ""}`}
                initial={{ x: -400, opacity: 0  }}
                animate={{ x: 0, opacity: 100   }}
                exit={{ x: -400, opacity: 0 }}
                transition={{ease: "easeInOut", duration: 0.28}}>
              <motion.div className="pt-[40px] h-full w-full"
                initial={{ x: -400, opacity: 0  }}
                animate={{ x: 0, opacity: 100   }}
                exit={{ x: -400, opacity: 0 }}
                transition={{ease: "easeInOut", duration: 0.32}}>
                
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <h2 className="text-[30px] underline">Christian Gouldy</h2>
                    <ul className=" py-5">
                      <li><a href="#">Item 1</a></li>
                      <li><a href="#">Item 2</a></li>
                      <li><a href="#">Item 3</a></li>
                    </ul>
                  </div>

                  <div className="w-full flex justify-evenly">
                    <a className="cursor-pointer"
                      href="https://github.com/Gouldy-C"
                      target="_blank">
                        <img className="w-[52px] h-[52px]" src="/github-mark.png" alt="Github" />
                    </a>
                    <a className="cursor-pointer"
                      href="https://www.linkedin.com/in/gouldy-c"
                      target="_blank">
                        <img className="w-[58px] h-[50px]" src="/LI-In-Bug.png" alt="LinkedIn" />
                    </a>
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