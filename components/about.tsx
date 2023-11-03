"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 1.0);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I made a bold decision to follow my <span className="italic font-semibold">passion for programming</span> and initiate a significant career change. My journey led me to enroll in a coding bootcamp, where I honed my skills in <span className="italic font-semibold">full-stack web development</span>. What excites me most about programming is the thrill of <span className="italic font-semibold">solving complex problems</span> and the sense of accomplishment that follows. My core stack includes <span className="italic font-semibold">React, Next.js, Node.js, and MongoDB,</span> and I'm well-versed in <span className="italic font-semibold">TypeScript</span> and <span className="italic font-semibold">Python</span>. I'm a <span className="italic font-semibold">perpetual learner</span>, always eager to embrace new technologies.
      </p>
      <p>
        I'm currently in search of a <span className="italic font-semibold">full-time software developer</span> position. <span className="italic">Beyond coding,</span> I find joy in  video games, movies, and expanding my knowledge. I'm also an outdoor enthusiast, frequently indulging in activities like <span className="italic font-semibold">backpacking</span> and <span className="italic font-semibold">mountain biking</span>.
      </p>
    </motion.section>
  );
}
