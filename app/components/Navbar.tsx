"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  }

  return (
    <>
      <div className={`nav-button w-14 fixed top-0 left-0 z-50 ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar w-3/4"></div>
        <div className="bar"></div>
      </div>
      <AnimatePresence>
        {menuOpen ?
          <motion.div className={`nav-menu z-40 z- fixed top-0 left-0 w-full md:w-72 h-full flex flex-col ${menuOpen ? "active shadow-xl" : ""}`}
                initial={{ x: -80 }}
                animate={{ x: 0 }}
                exit={{ x: -1000 }}>
              <motion.div
                initial={{ x: -50 }}
                animate={{ x: 100 }}
                exit={{ x: -800 }}>

                <ul className="">
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                  <li><a href="#">Item 3</a></li>
                </ul>
              </motion.div>
          </motion.div>
          : ''
        }
      </AnimatePresence>
    </>
  )
}

export default Navbar